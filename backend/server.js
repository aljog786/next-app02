import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { sampleNews } from './data.js';

const app = express();
const port = 8800; // Use a different port than the Next.js server
app.use(cors());

app.get('/news', (req, res) => {
    res.json(sampleNews);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
