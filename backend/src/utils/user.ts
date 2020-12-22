import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const secret = process.env.USER_SECRET_PASSWORD;

export function encryptPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

export function comparePasswords(password: string, secretPassword: string) {
    return bcrypt.compareSync(password, secretPassword) ? true : false;
};

export function generateToken(params: object) {
    return jwt.sign(params, secret || "")
};

export function authenticateToken(token: string) {
    return jwt.verify(token, secret || "");
};

