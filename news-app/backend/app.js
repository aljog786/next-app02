import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import News from './model/model.js'

const sampleNews = [
  {
    id: 'n1',
    slug: 'will-ai-replace-humans',
    title: 'Will AI Replace Humans?',
    image: 'ai-robot.jpg',
    date: '2021-07-01',
    content:
      'Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.',
  },
  {
    id: 'n2',
    slug: 'beaver-plague',
    title: 'A Plague of Beavers',
    image: 'beaver.jpg',
    date: '2022-05-01',
    content:
      'Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?',
  },
  {
    id: 'n3',
    slug: 'couple-cooking',
    title: 'Spend more time together!',
    image: 'couple-cooking.jpg',
    date: '2024-03-01',
    content:
      'Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!',
  },
  {
    id: 'n4',
    slug: 'hiking',
    title: 'Hiking is the best!',
    image: 'hiking.jpg',
    date: '2024-01-01',
    content:
      'Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!',
  },
  {
    id: 'n5',
    slug: 'landscape',
    title: 'The beauty of landscape',
    image: 'landscape.jpg',
    date: '2022-07-01',
    content:
      'Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!',
  },
];

const app = express();
app.use(cors());

const uri = 'mongodb+srv://aljog786:alb78Re6t@cluster0.czq1l0r.mongodb.net/nextnews'

mongoose.connect(uri, {});

async function initDb() {
  const count = await News.countDocuments();
  if (count === 0) {
    await News.insertMany(sampleNews);
  }
}

app.get('/news', async (req, res) => {
  const news = await News.find();
  res.json(news);
});

mongoose.connection.once('open', () => {
  initDb().then(() => {
    app.listen(8080, () => {
      console.log('Server is running on http://localhost:8080');
    });
  });
});
