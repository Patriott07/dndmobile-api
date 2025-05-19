import express from 'express';
import { verify } from '../controllers/auth.cotroller.js';
import { getLeaderboard } from '../controllers/user.controller.js';


const router = express.Router();

router.post("/leaderboard", verify, getLeaderboard);

export default router;