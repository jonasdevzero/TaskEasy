import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json('<h1>Server Running</h1>')
});

export default router;
