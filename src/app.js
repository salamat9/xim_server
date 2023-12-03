import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    try {
        console.log(`Server is running on port ${port}`);
    } catch (err) {
        console.log(`Error: ${err}`);
    }
});
