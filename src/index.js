import express from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import { registerUser } from './controllers/userController.js';

config();
const app = express();

app.use(bodyParser.json());

connect(process.env.MONGO_URI);

app.post('/api/users', registerUser);

app.listen(process.env.PORT, () => console.log(`Server running at ${process.env.PORT}`))