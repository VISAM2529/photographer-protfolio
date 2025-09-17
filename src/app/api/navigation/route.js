import { connectToDatabase } from '@/lib/mongodb';
import Navigation from '@/models/Navigation';
import { NextResponse } from 'next/server';

// GET - Get navigation data
export async function GET() {
  try {
    await connectToDatabase();
    const navigation = await Navigation.findOne();
    
    if (!navigation) {
      return NextResponse.json({ error: 'Navigation not found' }, { status: 404 });
    }
    
    return NextResponse.json(navigation);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create navigation data
export async function POST(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    // Check if navigation already exists
    const existingNavigation = await Navigation.findOne();
    if (existingNavigation) {
      return NextResponse.json({ error: 'Navigation already exists' }, { status: 400 });
    }
    
    const navigation = new Navigation(body);
    await navigation.save();
    
    return NextResponse.json(navigation, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update navigation data
export async function PUT(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const navigation = await Navigation.findOneAndUpdate(
      {},
      body,
      { new: true, upsert: true }
    );
    
    return NextResponse.json(navigation);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Delete navigation data
export async function DELETE() {
  try {
    await connectToDatabase();
    await Navigation.findOneAndDelete();
    
    return NextResponse.json({ message: 'Navigation deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}