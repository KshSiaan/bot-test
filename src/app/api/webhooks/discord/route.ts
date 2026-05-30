import { bot } from "@/lib/bot";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Clone the request to get raw body bytes
    const clonedReq = req.clone();
    return await bot.webhooks.discord(clonedReq);
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
