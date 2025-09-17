import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  title: { type: String, required: true },
  clients: [{
    logo: { type: String, required: true },
    name: { type: String, required: true },
    alt: { type: String, required: true }
  }]
}, {
  timestamps: true
});

export default mongoose.models.Client || mongoose.model('Client', ClientSchema);