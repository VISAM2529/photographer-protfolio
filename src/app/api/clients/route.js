import { connectToDatabase } from '@/lib/mongodb';
import Client from '@/models/Client';
import { NextResponse } from 'next/server';

// GET - Get clients data
export async function GET() {
  try {
    await connectToDatabase();
    const clients = await Client.findOne();
    
    if (!clients) {
      return NextResponse.json({ error: 'Clients not found' }, { status: 404 });
    }
    
    return NextResponse.json(clients);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create clients data
export async function POST(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const existingClients = await Client.findOne();
    if (existingClients) {
      return NextResponse.json({ error: 'Clients already exists' }, { status: 400 });
    }
    
    const clients = new Client(body);
    await clients.save();
    
    return NextResponse.json(clients, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update clients data
export async function PUT(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const clients = await Client.findOneAndUpdate(
      {},
      body,
      { new: true, upsert: true }
    );
    
    return NextResponse.json(clients);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Delete clients data
export async function DELETE() {
  try {
    await connectToDatabase();
    await Client.findOneAndDelete();
    
    return NextResponse.json({ message: 'Clients deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}