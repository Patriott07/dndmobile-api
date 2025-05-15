import express from 'express';
import { getAllSkin } from '../controllers/skin.controller.js';
const router = express.Router();

router.get('/get/skin', getAllSkin);

export default router;