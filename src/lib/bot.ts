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

// Listen for any message (not just mentions)
bot.onNewMessage(/.*/, async (thread, message) => {
  console.log("[Telegram] Received message:", message.text);
  await thread.post("Hello from Telegram!");
});

// Also listen for mentions
bot.onNewMention(async (thread, message) => {
  console.log("[Telegram] Received mention:", message.text);
  await thread.post("Hello from Telegram!");
});

// Auto-start polling when module loads (only in server environment)
if (typeof window === "undefined") {
  (async () => {
    try {
      await bot.initialize();
      const adapter = bot.getAdapter("telegram");
      await adapter.startPolling();
      console.log("[Telegram] Bot polling started automatically");
    } catch (error) {
      console.error("[Telegram] Failed to start polling:", error);
    }
  })();
}
