import express from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import User from './models/User.js';

config();
const app = express();

app.use(bodyParser.json());

connect(process.env.MONGO_URI);

app.listen(process.env.PORT, () => console.log(`Server running at ${process.env.PORT}`))