import { Chat } from "chat";
import { createDiscordAdapter } from "@chat-adapter/discord";
import { createRedisState } from "@chat-adapter/state-redis";
const bot = new Chat({
  userName: "Shiro",
  adapters: {
    discord: createDiscordAdapter(),
  },
  state: createRedisState(),
});
bot.onNewMention(async (thread, message) => {
  await thread.post("Hello from Discord!");
});
