import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { contentType, industry, audience, keywords } = await req.json();
    
    if (!contentType || !industry || !audience) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Construct the prompt based on user inputs
    const prompt = `Generate 5 creative and engaging ${contentType} ideas for the ${industry} industry targeting ${audience}.
      ${keywords ? `Include these keywords where relevant: ${keywords}.` : ''}
      For each idea, provide a catchy title and a brief description of what the content would include.
      Format the response as a JSON array with objects containing 'title' and 'description' fields.`;
    
    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a creative content strategist specialized in generating engaging content ideas tailored to specific audiences.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      model: 'gpt-4',
      response_format: { type: 'json_object' }
    });
    
    // Extract the generated ideas from the response
    const responseContent = completion.choices[0].message.content;
    const parsedResponse = JSON.parse(responseContent || '{}');
    
    return NextResponse.json({
      ideas: parsedResponse.ideas || [],
      contentType,
      industry,
      audience,
      generatedAt: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error generating ideas:', error);
    return NextResponse.json(
      { error: 'Failed to generate ideas' },
      { status: 500 }
    );
  }
}
