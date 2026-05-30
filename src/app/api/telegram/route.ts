import { bot } from "@/lib/bot";
import { NextResponse } from "next/server";

let pollingStarted = false;

export async function GET() {
  if (!pollingStarted) {
    pollingStarted = true;
    console.log("[Telegram Route] Manual polling start triggered");
    try {
      await bot.initialize();
      const adapter = bot.getAdapter("telegram");
      await adapter.startPolling();
      console.log("[Telegram Route] ✅ Polling started from route");
    } catch (error) {
      console.error("[Telegram Route] Failed:", error);
    }
  }

  return NextResponse.json({
    status: "ok",
    message: "Telegram bot is polling",
    timestamp: new Date().toISOString(),
  });
}
