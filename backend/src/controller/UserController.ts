import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
import { encryptPassword, generateToken, comparePasswords, authenticateToken } from "../utils/user";
import { getTime } from "../utils/date";
import * as Yup from "yup";
import UserView from "../views/user_view";

export default {
    async index(resquest: Request, response: Response) {
        try {
            const userRepository = getRepository(User);
            const users = await userRepository.find();

            return response.status(200).json({ users: UserView.renderMany(users) });
        } catch (err) {
            console.log("Error on { index } [user] -> ", err);
            return response.status(500).json({ message: "Internal Server Error" });
        }
    },

    async show(request: Request, response: Response) {
        try {
            const username = request.params.username;

            const userRepository = getRepository(User);
            const user = await userRepository.findOne({ where: { username } });

            if (!user) {
                return response.status(404).json({ message: "user not exists" });
            };

            return response.status(200).json({ user: UserView.render(user) });
        } catch (err) {
            console.log("Error on { show } [user] -> ", err);
            return response.status(500).json({ message: "Internal Server Error" });
        }
    },

    async create(request: Request, response: Response) {
        try {
            const { name, username, email, password } = request.body;
            const data = {
                name,
                username: "@" + username,
                email,
                password,
                coin: 0,
                created_at: getTime(),
                modified_at: getTime(),
            };
            const userRepository = getRepository(User);

            // validate data
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required(),
                password: Yup.string().required(),
            });
            await schema.validate(data, {
                abortEarly: false,
            }).catch(err => response.status(400).json({
                message: err.message,
                fields: err.inner.map((field: { path: string }) => field.path),
            }));

            const existsUser = await userRepository.findOne({ where: { email } });
            if (existsUser)
                return response.status(400).json({
                    message: "User already exists",
                    fields: ["email"],
                });

            data.password = encryptPassword(password);

            const user = userRepository.create(data);
            await userRepository.save(user);

            return response.status(201).json({ token: generateToken({ id: user.id }), user: UserView.render(user) });
        } catch (err) {
            console.log("Error on { create } [user] -> ", err);
            return response.status(500).json({ message: "Internal Server Error" });
        };
    },

    async update(request: Request, response: Response) {
        try {
            const id = request.params.id;

            const userRepository = getRepository(User);

            await userRepository.update(id, request.body);
            const user = await userRepository.findOne(id);

            if (!user)
                return response.status(404).json({ message: "User not found" });

            return response.status(200).json({ user: UserView.render(user) })
        } catch (err) {
            console.log("Error on { update } [user] -> ", err);
            return response.status(500).json({ message: "Internal Server Error" });
        };
    },

    async delete(request: Request, response: Response) {
        try {
            const id = request.params.id;

            const userRepository = getRepository(User);
            await userRepository.delete(id)
                .catch(err => response.status(400).json({ message: "Invalid id" }));

            return response.status(200).json({ message: "ok" });
        } catch (err) {
            console.log("Error on { create } [user] -> ", err);
            return response.status(500).json({ message: "Internal Server Error" });
        };
    },

    async login(request: Request, response: Response) {
        try {
            const { email, password } = request.body;

            const userRepository = getRepository(User);
            const user = await userRepository.findOne({ where: { email } });

            if (!user)
                return response.status(404).json({
                    message: "User not exists",
                    fields: ["email"],
                });

            if (!comparePasswords(password, user.password))
                return response.status(400).json({
                    message: "Invalid Password",
                    fields: ["password"],
                });

            return response.status(200).json({
                token: generateToken({ id: user.id }),
                user: UserView.render(user),
            });
        } catch (err) {
            console.log("Error on { login } [user] -> ", err);
            return response.status(500).json({ message: "Internal Server Error" });
        };
    },

    async auth(request: Request, response: Response, next: NextFunction) {
        if (!request.headers.access_token)
            return response.status(401).json({ message: "Access denied" });

        try {
            const access_token = request.headers["access-token"];

            const userVerified = authenticateToken(String(access_token));

            if (request.body.u === "true") {
                request.body.user = userVerified;
                const { id } = request.body.user;

                const userRepository = getRepository(User);
                const user = await userRepository.findOne(id);

                if (!user)
                    return response.status(404).json({ error: "User not found" });

                return response.status(200).json({ user: UserView.render(user) });
            };

            next();
        } catch (err) {
            console.log("Error on { auth } [user] -> ", err);
            return response.status(500).json({ message: "Internal Server Error" });
        };
    },
};
