import mongoose from 'mongoose';

const HeroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightedWords: [{ type: String }],
  subtitle: { type: String, required: true },
  buttons: [{
    text: { type: String, required: true },
    url: { type: String, required: true }
  }],
  backgroundImage: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.models.Hero || mongoose.model('Hero', HeroSchema);