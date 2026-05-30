import { Chat } from "chat";
import { createTelegramAdapter } from "@chat-adapter/telegram";
import { createMemoryState } from "@chat-adapter/state-memory";

const telegram = createTelegramAdapter({
  mode: "polling",
});

export const bot = new Chat({
  userName: "nurimobot",
  adapters: { telegram },
  state: createMemoryState(),
});

// Also listen for mentions
bot.onNewMention(async (thread, message) => {
  console.log("[Telegram] Received mention:", message.text);
  await thread.post(`Hello! You mentioned me with: "${message.text}"`);
});

// Auto-start polling when module loads (only in server environment)
if (typeof window === "undefined") {
  setTimeout(async () => {
    try {
      console.log("[Telegram] Initializing bot...");
      await bot.initialize();
      console.log("[Telegram] Bot initialized");

      const adapter = bot.getAdapter("telegram");
      console.log("[Telegram] Got adapter:", adapter ? "OK" : "FAILED");

      console.log("[Telegram] Starting polling...");
      await adapter.startPolling();
      console.log("[Telegram] ✅ Bot polling started successfully!");
    } catch (error) {
      console.error("[Telegram] ❌ Failed to start polling:", {
        message: error?.message,
        code: error?.code,
        stack: error?.stack,
      });
    }
  }, 1000);
}
