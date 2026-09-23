import "dotenv/config";

import express from "express";
const app = express();
const port = process.env.PORT || 9398;

const token = process.env.DC_TOKEN;

import { Client, Events, GatewayIntentBits } from "discord.js";

import fetchUserStatus, { UserInfo } from "./utils/fetchUserStatus.js";
import fetchServerInfo from "./utils/fetchServerInfo.js";
import generateShield from "./utils/generateShield.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
  ],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Logged in to Discord as ${readyClient.user.tag}`);

  app.get("/", (_req, res) => {
    res.redirect("https://github.com/limesdotpink/dcbadge#readme");
  });

  app.get("/api/shield/:userID", async (req, res) => {
    const { userID } = req.params;
    const { bot, compact, theme, style, logoColor } = req.query;

    const userInfo: UserInfo = await fetchUserStatus(
      readyClient,
      userID,
      bot === "true",
    );

    if (userInfo.error) {
      return res.status(400).send(userInfo.error);
    }

    const shield = await generateShield({
      label: userInfo.username || '',
      message: userInfo.status || '',
      compact: Boolean(compact).valueOf(),
      theme: theme as string,
      style: style as string,
      logoColor: logoColor as string,
    });

    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(shield);
  });

  app.get("/api/server/*invite", async (req, res) => {
    const invite = req.params.invite;

    const { compact, theme, style, logoColor, scale } = req.query;

    const serverInfo = await fetchServerInfo(invite);

    if (serverInfo.error) {
      return res.status(400).send(serverInfo.error);
    }

    const shield = await generateShield({
      label: serverInfo.name,
      message: serverInfo.memberCount,
      compact: Boolean(compact).valueOf(),
      theme: theme as string,
      style: style as string,
      logoColor: logoColor as string,
      scale: Number(scale)
    });

    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(shield);
  });

  app.listen(port, () => {
    console.log(
      `discord-md-badge v3.0.2 listening at http://localhost:${port}`,
    );
  });
});

// Log in to Discord with your client's token
client.login(token);
