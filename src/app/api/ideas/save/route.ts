import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

// In a real app, this would be replaced with a database call
let savedIdeas: any[] = [];

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const { title, description, contentType, industry, audience } = await req.json();
    
    if (!title || !description || !contentType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const newIdea = {
      id: Date.now().toString(),
      title,
      description,
      contentType,
      industry,
      audience,
      userId: session.user?.email,
      createdAt: new Date().toISOString(),
    };
    
    // In a real app, you would save this to a database
    savedIdeas.push(newIdea);
    
    return NextResponse.json({
      success: true,
      idea: newIdea
    });
    
  } catch (error) {
    console.error('Error saving idea:', error);
    return NextResponse.json(
      { error: 'Failed to save idea' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // In a real app, you would filter ideas from a database
    const userIdeas = savedIdeas.filter(
      idea => idea.userId === session.user?.email
    );
    
    return NextResponse.json({
      ideas: userIdeas
    });
    
  } catch (error) {
    console.error('Error retrieving ideas:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve ideas' },
      { status: 500 }
    );
  }
}
