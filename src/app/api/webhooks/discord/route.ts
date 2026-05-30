import { bot } from "@/lib/bot";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return await bot.webhooks.discord(req);
}
