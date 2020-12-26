import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
import { encryptPassword, generateToken } from "../utils/user";
import { getTime } from "../utils/date";
import * as Yup from "yup";
import UserView from "../views/user_view";

export default {
    async index(resquest: Request, response: Response) {
        try {

        } catch (err) {
            console.log("Error on { index } [user] -> ", err);
            return response.status(500).json({ message: "Internal Server Error" });
        }
    },

    async create(request: Request, response: Response) {
        try {
            const { name, username, email, password } = request.body;
            const data = {
                name,
                username,
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
};
