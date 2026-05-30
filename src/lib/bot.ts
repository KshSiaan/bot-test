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

bot.onNewMention(async (thread, message) => {
  await thread.post("Hello from Telegram!");
});
