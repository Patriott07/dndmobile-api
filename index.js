import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
// import bycrypt from 'bcrypt';

import RouteUser from './routes/auth.route.js';
import RouteCard from './routes/card.route.js';
import RouteSkin from './routes/skin.route.js';
import RouteDeck from './routes/deck.route.js';

const app = express();
dotenv.config({ path: '.env' });

const port = process.env.PORT;
const mongo = process.env.MONGO;

app.use(cors());
app.use(express.json());

app.use(RouteCard);
app.use(RouteUser);
app.use(RouteSkin);
app.use(RouteDeck);

mongoose.connect(mongo);

mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connection.on('disconnected', () => console.log('disconnected'));

app.get('/', (req, res) => {
    res.json({ message: "Hello world" });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// console.log(bycrypt.hashSync("123", 10))