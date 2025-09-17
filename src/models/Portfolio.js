import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  items: [{
    image: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true }
  }]
}, {
  timestamps: true
});

export default mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema);