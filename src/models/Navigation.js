import mongoose from 'mongoose';

const NavigationSchema = new mongoose.Schema({
  logo: {
    text: { type: String, required: true },
    icon: { type: String, required: true }
  },
  links: [{
    text: { type: String, required: true },
    url: { type: String, required: true },
    isActive: { type: Boolean, default: false }
  }],
  cta: {
    text: { type: String, required: true },
    url: { type: String, required: true }
  }
}, {
  timestamps: true
});

export default mongoose.models.Navigation || mongoose.model('Navigation', NavigationSchema);