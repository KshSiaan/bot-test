import { bot } from "@/lib/bot";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    return await bot.webhooks.discord(req);
  } catch (error) {
    console.error("Discord webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({
    status: "ok",
    message: "Discord webhook endpoint",
  });
}
