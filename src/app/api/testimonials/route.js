import { connectToDatabase } from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';
import { NextResponse } from 'next/server';

// GET - Get testimonials data
export async function GET() {
  try {
    await connectToDatabase();
    const testimonials = await Testimonial.findOne();
    
    if (!testimonials) {
      return NextResponse.json({ error: 'Testimonials not found' }, { status: 404 });
    }
    
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create testimonials data
export async function POST(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const existingTestimonials = await Testimonial.findOne();
    if (existingTestimonials) {
      return NextResponse.json({ error: 'Testimonials already exists' }, { status: 400 });
    }
    
    const testimonials = new Testimonial(body);
    await testimonials.save();
    
    return NextResponse.json(testimonials, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update testimonials data
export async function PUT(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const testimonials = await Testimonial.findOneAndUpdate(
      {},
      body,
      { new: true, upsert: true }
    );
    
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Delete testimonials data
export async function DELETE() {
  try {
    await connectToDatabase();
    await Testimonial.findOneAndDelete();
    
    return NextResponse.json({ message: 'Testimonials deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}