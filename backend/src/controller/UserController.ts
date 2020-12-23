import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
import { encryptPassword, generateToken, validateData } from "../utils/user";

export default {
    async create(request: Request, response: Response) {
        try {
            const { name, email, password } = request.body;
            const data = {
                name,
                email,
                password,
                coin: 0,
                created_at: Date.now(),
                modified_at: Date.now()
            };
            const userRepository = getRepository(User);

            const existsUser = await userRepository.findOne({ where: { email } });
            if (existsUser)
                return response.status(400).json({
                    message: "User already exists",
                    field: "email",
                });

            // validate data
            validateData(request.body).catch(err => {
                return response.status(400).json(err)
            });

            data.password = encryptPassword(password);

            const user = userRepository.create(data);
            await userRepository.save(user);

            return response.status(201).json({ token: generateToken({ id: user.id }), user });
        } catch (err) {
            console.log("Error on { create } [user] -> ", err);
            return response.status(500).json({ message: "Internal Server Error" });
        };
    },
};
