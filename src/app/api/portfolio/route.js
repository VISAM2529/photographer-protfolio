import { connectToDatabase } from '@/lib/mongodb';
import Portfolio from '@/models/Portfolio';
import { NextResponse } from 'next/server';

// GET - Get portfolio data
export async function GET() {
  try {
    await connectToDatabase();
    const portfolio = await Portfolio.findOne();
    
    if (!portfolio) {
      return NextResponse.json({ error: 'Portfolio not found' }, { status: 404 });
    }
    
    return NextResponse.json(portfolio);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create portfolio data
export async function POST(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const existingPortfolio = await Portfolio.findOne();
    if (existingPortfolio) {
      return NextResponse.json({ error: 'Portfolio already exists' }, { status: 400 });
    }
    
    const portfolio = new Portfolio(body);
    await portfolio.save();
    
    return NextResponse.json(portfolio, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update portfolio data
export async function PUT(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const portfolio = await Portfolio.findOneAndUpdate(
      {},
      body,
      { new: true, upsert: true }
    );
    
    return NextResponse.json(portfolio);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Delete portfolio data
export async function DELETE() {
  try {
    await connectToDatabase();
    await Portfolio.findOneAndDelete();
    
    return NextResponse.json({ message: 'Portfolio deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}