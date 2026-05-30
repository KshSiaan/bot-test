import { bot } from "@/lib/bot";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("[Discord Route] Received webhook request");
    const clonedReq = req.clone();
    const response = await bot.webhooks.discord(clonedReq);
    console.log("[Discord Route] Webhook response status:", response.status);
    return response;
  } catch (error) {
    console.error("[Discord Route] Webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({
    status: "ok",
    message: "Discord webhook endpoint",
    timestamp: new Date().toISOString(),
  });
}
