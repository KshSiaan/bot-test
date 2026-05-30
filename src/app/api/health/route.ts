import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    env: {
      hasDiscordToken: !!process.env.DISCORD_BOT_TOKEN,
      hasRedisUrl: !!process.env.REDIS_URL,
    },
  });
}
