//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "50941091397";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/xvYDAsD.jpeg,https://i.imgur.com/TAGPcMC.jpeg,https://endpoint.web.id/server/file/I8dkDXm1nJDtOI75.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid004U2paZkM4bURmT2JqWkpzbEJWdW51R1pTRmxBR3d2bW5JTVk3eVJVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekh3TWRuQnJiR0szWUVUTGNtQVNsNHVicXJjK0dLTFY0ekZHb2RSKzUxOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpT1JKeG1IVE5tQ3Z6QkdJL2tBSzh3blE2WXZ3cFZua2pPS1IvclBmcFdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqdG11VjFva2pWeTJQYm1FSzNKWldDQzF0SW1PWWJPbGdwWDVueVdLbkEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFIMjhaK25vMVpWZTNrL2RiRnVSSzVxblFsYnhkTUErK2o0T29NS1hFRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM0bm5lVzF4TmZJZWVKTzVLWEdiMEs2dzR2N3pabmpzMkRlSUg2REt4QW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktCNnM1eWxlREh2SlVpQTJTRlNTWGZaU1lCc2drUisvYjVONkZHSDYzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWFKMXY4UGdnMk52L0pFVnZhcXNod0w4bEoyelJzck0rL3ZXOVI3MVQyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpqS0psaEtMa2VySnhneTEzZzM2VVRvS0hnN2d2WkpnTFJmT2tNTWJhT2xBcXM5ZFN0R3Z4cndTcCtFL0FSbGRmRk5YK1BZbHRiS3lqa0RqTjB1TWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6IlBOWVQxaDVkeEFiMlhqWmcwUmo3SktTb1o1U2ZRcmNnREJ2aDJ5VDNEdGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikx4SUFlclNyUkttWFJ4ZmhMSmlWV3ciLCJwaG9uZUlkIjoiYjE2OTAyZGYtNmE5ZS00MWI1LWFlN2EtNzcxZTQwYjM4M2Q2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJqWFdKMXRNTTdLRkltb2NqWU1JZFNpYWxaST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5RVZrVDFzdmdRaTAyZUR6b2lJaFZjclJtN1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVjZaS0xZWUYiLCJtZSI6eyJpZCI6IjUwOTQxMDkxMzk3OjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkthaXNlbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG4xbU5BQkVJcU0yTG9HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV2xZZ0NzZkh5L2loQlJxZzV5RXZZV2NtUHlqQTR5YlNEQTZTQjJPbjZtND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTlpCWEFqUkQ1MnhiSnhnMFV2T0RVOVNXZGM0UEFrVUhpYnRIMkpmQlhqRDhxLzB5b2JBTnMzSEZmZzFHWE9JaDlTWUNBU016R1dmNENvQnU4UlB0RGc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikd6VDZCUDdLMzZtcjgwNk4rKzdrNms1Sm9jUmdDZEJtNUZFUCtrQXJzY3lqRC9hc2kxQUc2YzdwV0JEdi9qZ2NOUDJYVjR5VHFNZGU0Zk93R0toNWd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDEwOTEzOTc6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnBXSUFySHg4djRvUVVhb09jaEwyRm5Kajhvd09NbTBnd09rZ2RqcCtwdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzY5MDkwMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCQ1kifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊",
  packname: process.env.PACK_NAME || "𝐉𝐈𝐍𝐇𝐘𝐔𝐊-𝐌𝐃",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "𝑃𝒂𝒚𝒆𝒓 𝑈𝒏𝒌𝒏𝒐𝒘𝒏",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
