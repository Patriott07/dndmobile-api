import { login, logout, register, me } from "../controllers/auth.cotroller.js";
import express from 'express';

const router = express.Router();

router.post('/login', login);
router.post("/register", register);
router.post("/me/:id", me);

export default router;