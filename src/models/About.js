import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  bio: { type: String, required: true },
  specializations: [{
    title: { type: String, required: true }
  }]
}, {
  timestamps: true
});

export default mongoose.models.About || mongoose.model('About', AboutSchema);