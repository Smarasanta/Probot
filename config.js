
const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();

// Default values for global variables
global.available = process.env.AVAILABLE || true;
global.autoReadAll = process.env.AUTO_READ_ALL || false;
global.antitags = process.env.ANTITAGS || true;
global.joinall = process.env.JOINALL || false;

// Auto functioner
global.autoTyping = process.env.AUTO_TYPING || false;
global.autoRecord = process.env.AUTO_RECORD || false;
global.groupevent = process.env.GROUPEVENT || false;
global.statusseen = process.env.STATUSSEEN || true;
global.autoreadgc = process.env.AUTOREADGC || true;


// Auth information
global.pairNumber = "6282313716106";                         // Add your paining number with country code example "6282326322300"; 
global.port = process.env.PORT || "10000";
global.auth = process.env.AUTH || "Pairing";                // Auth mode OR/Pairing.
global.sessionFile = process.env.SESSION_FILE || "A17-SESSION";
global.mongodb = process.env.MONGODB || "";                 // Mongodb url.
global.website = "https://chat.whatsapp.com/F3ozw6NWQi01yVNprxGtHr"; 
global.github = "https://github.com/Diah082";


// Default prefix
global.prefa = process.env.PREFIX ? process.env.PREFIX.split(".") : [","];


// Owner information
global.Owner = process.env.OWNER ? process.env.OWNER.split(",") : ["6285161256106"];
global.OwnerNumber = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.split(",") : ["6285161256106"];
global.ownertag = process.env.OWNER_TAG ? process.env.OWNER_TAG.split(",") : ["6285161256106"];
global.OwnerName = process.env.OWNER_NAME || "SabdoPalon";
global.BotName = process.env.BOT_NAME || "SabdoPalon-Store";
global.packname = process.env.PACK_NAME || "PROM Bot";
global.author = "By: Newbie";
global.BotSourceCode = "https://github.com/Diah082/NewbieBot";
global.GroupLink = "https://chat.whatsapp.com/F3ozw6NWQi01yVNprxGtHr";
global.Qris = "https://raw.githubusercontent.com/Smarasanta/Assets/main/QR.jpg";
global.Email = "gfa01086@gmail.com"; // Ganti dengan email kamu
global.Pass = "Sabdo1Kece"; // Ganti dengan password kamu

//
global.openAiAPI = process.env.OPENAI_API || "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";
global.location = process.env.LOCATION || "Center Java, Indonesia";
global.reactmoji = process.env.REACT_MOJI || "❤️";
global.themeemoji = process.env.THEME_EMOJI || "💖";
global.vidmenu = { url: process.env.VID_MENU_URL || 'https://telegra.ph/file/ae16bc14d33d7d520cd7d.mp4' };


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = "https://files.catbox.moe/ogjri0.jpg";
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.them = "https://r4.wallpaperflare.com/wallpaper/1003/376/845/makoto-shinkai-kimi-no-na-wa-wallpaper-0816ade8b0301c58302c014e48d2441a.jpg";


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


// Messages
global.mess = {
  jobdone: 'Here you go...',
  useradmin: 'Sorry, only *Group Admins* can use this command *Baka*!',
  botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
  botowner: 'Only my *Owner* can use this command, Baka!',
  grouponly: 'This command is only made for *Groups*, Baka!',
  privateonly: 'This command is only made for *Private Chat*, Baka!',
  botonly: 'Only the *Bot itself* can use this command!',
  waiting: 'Just Wait...',
  nolink: 'Please provide me *link*, Baka!',
  error: 'An error occurd!',
  banned: 'You are *Banned* fron using commands!',
  bangc: 'This Group is *Banned* from using Commands!',
  nonsfw: 'Dont be a pervert Baka! This is not a NSFW enabled group!'

}
