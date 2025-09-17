import { connectToDatabase } from '@/lib/mongodb';
import About from '@/models/About';
import { NextResponse } from 'next/server';

// GET - Get about data
export async function GET() {
  try {
    await connectToDatabase();
    const about = await About.findOne();
    
    if (!about) {
      return NextResponse.json({ error: 'About not found' }, { status: 404 });
    }
    
    return NextResponse.json(about);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create about data
export async function POST(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const existingAbout = await About.findOne();
    if (existingAbout) {
      return NextResponse.json({ error: 'About already exists' }, { status: 400 });
    }
    
    const about = new About(body);
    await about.save();
    
    return NextResponse.json(about, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update about data
export async function PUT(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const about = await About.findOneAndUpdate(
      {},
      body,
      { new: true, upsert: true }
    );
    
    return NextResponse.json(about);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Delete about data
export async function DELETE() {
  try {
    await connectToDatabase();
    await About.findOneAndDelete();
    
    return NextResponse.json({ message: 'About deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}