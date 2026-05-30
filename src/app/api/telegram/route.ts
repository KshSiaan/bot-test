import { bot } from "@/lib/bot";
import { NextResponse } from "next/server";

let pollingStarted = false;

export async function GET() {
  if (!pollingStarted) {
    pollingStarted = true;
    // Start polling in the background
    bot.listen().catch((error) => {
      console.error("[Telegram] Polling error:", error);
    });
  }

  return NextResponse.json({
    status: "ok",
    message: "Telegram bot polling started",
    timestamp: new Date().toISOString(),
  });
}
