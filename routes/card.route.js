import express from 'express';
import {get} from '../controllers/card.controller.js';

const router = express.Router();

router.get('/get/card', get);

export default router;