import { Router } from 'express';
import UserController from "./controller/UserController";

const router = Router();

router.get('/', (req, res) => {
    res.json('<h1>Server Running</h1>')
});

router.post("/user", UserController.create);

export default router;
