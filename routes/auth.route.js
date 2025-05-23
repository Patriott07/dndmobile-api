import { login, register, me } from "../controllers/auth.cotroller.js";
import express from 'express';

const router = express.Router();

router.post('/login', login);
router.post("/register", register);
router.get("/me/:id", me);

export default router;