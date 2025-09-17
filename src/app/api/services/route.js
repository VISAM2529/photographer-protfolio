import { connectToDatabase } from '@/lib/mongodb';
import Service from '@/models/Service';
import { NextResponse } from 'next/server';

// GET - Get services data
export async function GET() {
  try {
    await connectToDatabase();
    const services = await Service.findOne();
    
    if (!services) {
      return NextResponse.json({ error: 'Services not found' }, { status: 404 });
    }
    
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create services data
export async function POST(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const existingServices = await Service.findOne();
    if (existingServices) {
      return NextResponse.json({ error: 'Services already exists' }, { status: 400 });
    }
    
    const services = new Service(body);
    await services.save();
    
    return NextResponse.json(services, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update services data
export async function PUT(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const services = await Service.findOneAndUpdate(
      {},
      body,
      { new: true, upsert: true }
    );
    
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Delete services data
export async function DELETE() {
  try {
    await connectToDatabase();
    await Service.findOneAndDelete();
    
    return NextResponse.json({ message: 'Services deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}