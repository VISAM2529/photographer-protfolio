import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  testimonials: [{
    text: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true }
  }]
}, {
  timestamps: true
});

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
//sample