import express from "express";
import { verify } from "../controllers/auth.cotroller.js";
import { getDeckUser, saveDeckUser } from '../controllers/deck.controller.js';

const router = express.Router();

router.get(verify, getDeckUser);
router.post(verify, saveDeckUser);

export default router;

