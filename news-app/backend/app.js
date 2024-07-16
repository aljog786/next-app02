import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import News from './model/model.js'

const app = express();
app.use(cors());

const uri = 'mongodb+srv://aljog786:alb78Re6t@cluster0.czq1l0r.mongodb.net/nextnews'

mongoose.connect(uri, {});

app.get('/news', async (req, res) => {
  const news = await News.find();
  res.json(news);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
