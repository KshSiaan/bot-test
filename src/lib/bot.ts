import { Chat } from "chat";
import { createDiscordAdapter } from "@chat-adapter/discord";
import { createRedisState } from "@chat-adapter/state-redis";
const bot = new Chat({
  userName: "bot1510288159739744389",
  adapters: {
    discord: createDiscordAdapter(),
  },
  state: createRedisState(),
});
bot.onNewMention(async (thread, message) => {
  await thread.post("Hello from Discord!");
});
