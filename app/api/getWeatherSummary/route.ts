import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  // weatherdata in the body of the POST request
  const { weatherData } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.9,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Pretend that you're a weather news presenter presenting LIVE on television. Be energetic, funny, creative and full of charisma. Introduce yourself as Saabi AI Assistant and say you're LIVE from the SAABI Weather Center Headquarters. State the city you are providing a summary for. Then give a summary of today's weather only. Make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as wear SPF if UV index is high, bring an umbrella if it's raining, etc. use the uv_index data provided to provide UV advice. Use the precipitation_probability data to provide rain advice. Provide a joke regarding the weather. Assume the data came from your team at the news office and not the user.`,
      },
      {
        role: "user",
        content: `Hi there, can I get a summary of today's weather, use the following information to get the weather data: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
  });

  const { data } = response;

  console.log("DATA IS: ", data);
}
