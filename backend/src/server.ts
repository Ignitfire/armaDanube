// external modules
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import http from "http";
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

// internal modules
import {UserModel} from "./models/user";
import router from "./routes";


const app = express();
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200'] // not sure that's needed
}));
// this is used to Parse the repsonse body into JSON
app.use(bodyParser.json());
// this is used to Parse cookies from the HTTP Request
app.use(cookieParser());
// this is used to Compress the response body
app.use(compression());

const port = 5000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server running on port ' + port);
});

// routes ig?
app.get('/api', (req, res) => {
    res.send('Hello from server!');
});

app.post('/api/users', async (req, res) => {
   try {
       const user = await UserModel.create(req.body);
       res.status(200).json(user);
   } catch (error) {
       if (error instanceof Error) {
           res.status(500).json({ message: error.message });
       } else {
           res.status(500).json({ message: 'An unknown error occurred' });
       }
   }
});

// Connection to MongoDB
const uri = "mongodb+srv://josue:armadanube@dbarmadanube.58yfc.mongodb.net/?retryWrites=true&w=majority&appName=DBarmadanube";

mongoose.connect(uri);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error: Error) => {
    console.log('Error connecting to MongoDB:', error);
});
app.use("/", router())