import { Chat } from "chat";
import { createDiscordAdapter } from "@chat-adapter/discord";
const bot = new Chat({
  userName: "mybot",
  adapters: {
    discord: createDiscordAdapter(),
  },
});
bot.onNewMention(async (thread, message) => {
  await thread.post("Hello from Discord!");
});