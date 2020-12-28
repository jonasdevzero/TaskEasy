import { Router } from 'express';
import UserController from "./controller/UserController";

const router = Router();

router.get('/', (req, res) => {
    res.json('<h1>Server Running</h1>')
});

router.get("/user", UserController.index);
router.get("/user/:username", UserController.show);
router.post("/user", UserController.create);
router.put("/user", UserController.update);
router.delete("/user", UserController.delete);
router.post("/login", UserController.login);
router.post("/auth", UserController.auth);

export default router;
