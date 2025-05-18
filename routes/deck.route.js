import express from "express";
import { verify } from "../controllers/auth.cotroller.js";
import { getDeckUser, saveDeckUser } from '../controllers/deck.controller.js';

const router = express.Router();

router.get("/mydeck", verify, getDeckUser);
router.post("/save/mydeck", verify, saveDeckUser);

export default router;

