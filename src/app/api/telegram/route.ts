import { bot } from "@/lib/bot";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Telegram bot is polling",
    timestamp: new Date().toISOString(),
  });
}
