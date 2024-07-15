import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    slug: { type: String, unique: true },
    title: String,
    content: String,
    date: String,
    image: String,
  });
  
  export default mongoose.model('News', newsSchema);