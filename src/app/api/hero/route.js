import { connectToDatabase } from '@/lib/mongodb';
import Hero from '@/models/Hero';
import { NextResponse } from 'next/server';

// GET - Get hero data
export async function GET() {
  try {
    await connectToDatabase();
    const hero = await Hero.findOne();
    
    if (!hero) {
      return NextResponse.json({ error: 'Hero not found' }, { status: 404 });
    }
    
    return NextResponse.json(hero);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create hero data
export async function POST(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const existingHero = await Hero.findOne();
    if (existingHero) {
      return NextResponse.json({ error: 'Hero already exists' }, { status: 400 });
    }
    
    const hero = new Hero(body);
    await hero.save();
    
    return NextResponse.json(hero, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update hero data
export async function PUT(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const hero = await Hero.findOneAndUpdate(
      {},
      body,
      { new: true, upsert: true }
    );
    
    return NextResponse.json(hero);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Delete hero data
export async function DELETE() {
  try {
    await connectToDatabase();
    await Hero.findOneAndDelete();
    
    return NextResponse.json({ message: 'Hero deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}