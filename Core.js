process.on("uncaughtException", (err) => {
  console.error("❌ [Uncaught Exception]", err);
});

require("./config");
const originalLog = console.log;
console.log = (...args) => {
  const skipPhrases = [
    'Closing stale open session',
    'Opening new session for incoming prekey',
    'Creating new session for',
    'Using existing session for'
  ];
  const skip = args.some(arg =>
    typeof arg === 'string' && skipPhrases.some(phrase => arg.includes(phrase))
  );
  if (!skip) originalLog(...args);
};
    const readJson = (filePath) => {
      try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data).text || "";
      } catch (err) {
        console.error(`Error membaca file ${filePath}:`, err.message);
        return "";
      }
    };
const fs = require('fs');
const path = require('path'); // ⬅️ INI WAJIB ADA
const pm2 = require('pm2');
const sharp = require('sharp'); // pastikan di atas
const { generateGroupBanner } = require('./lib/bannerUtil.js');
const { uploadFile } = require('./lib/uploadsfile.js');
const { uploadFileWithRetry } = require('./lib/uploadsfile.js');
const util = require("util");
const { promisify } = require('util');
const setTimeoutPromise = promisify(setTimeout);
const chalk = require("chalk");
const axios = require('axios');
const yts = require('youtube-yts');
const { spawn, exec, execSync } = require("child_process");
const moment = require("moment-timezone");
const { EmojiAPI } = require("emoji-api");
const { addBalance } = require("./lib/limit.js");
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, fetchBuffer, clearChat } = require('./lib/myfunc')
const _ = require("lodash");
const yargs = require("yargs/yargs");
const kaitime = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const kaidate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss');
const currentDate = new Date();
const options = { weekday: 'long' }; // Specify 'long' to get the full day name
const currentDay = new Intl.DateTimeFormat('en-US', options).format(currentDate);
const FormData = require('form-data');
const speed = require('performance-now');
const eco = require('discord-mongoose-economy');
// const ffmpeg = require('fluent-ffmpeg');
// const ffmpegPath = require('ffmpeg-static').path;
// ffmpeg.setFfmpegPath(ffmpegPath);
const Jimp = require('jimp');  // for full dp etc.
const { updateConfig } = require("./database/configUpdater");
const modapk = require("tod-api");
const { hentai } = require('./lib/scraper2.js');
const { instadl } = require('./lib/instadl');
//const ty = eco.connect('mongodb+srv://Arch:1t6l2G0r6nagLlOb@cluster0.gedh4.mongodb.net/?retryWrites=true&w=majority');
const { isLimit, limitAdd, getLimit, giveLimit, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const githubstalk = require('./lib/githubstalk');
let { covid } = require('./lib/covid.js');
const { Gempa } = require("./lib/gempa.js");
const getLyrics = require("@fantox01/lyrics-scraper");
const spaceemojis = ["🌌", "🌠", "🚀", "🪐", "🌟"];     // list of emojis for Space CMDs.
const manyemojis = ["😄", "👍", "👏", "👌", "🥇", "🌟", "🎉", "🙌", "🤩", "💯", "🔥", "✨", "🚀", "💖", "🌈", "🌞", "🌠", "🌼", "💪", "😎", "💫", "💓", "🎈", "🎁", "🍾", "🎊", "🥳", "👑", "🌺", "🌻", "🌸"];
const os = require("node:os");       // for os info
const gis = require("g-i-s");

const { downloadContentFromMessage,
  WA_DEFAULT_EPHEMERAL,
  proto, jid,
  getContentType,
  generateWAMessageContent,
  generateWAMessageFromContent,
  BufferJSON,
  prepareWAMessageMedia,
  MessageType,
  areJidsSameUser, } = require('@whiskeysockets/baileys');

const getTimeGreeting = () => {
    const now = new Date();
    const hours = now.getHours();    // Jam (0-23)
    const minutes = now.getMinutes(); // Menit (0-59)
    const seconds = now.getSeconds(); // Detik (0-59)

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds < 5 * 3600) {
        return 'Selamat malam 🏙';
    } else if (totalSeconds < 11 * 3600) {
        return 'Selamat pagi 🌅';
    } else if (totalSeconds < 15 * 3600) {
        return 'Selamat siang 🏞';
    } else if (totalSeconds < 18 * 3600) {
        return 'Selamat sore 🌇';
    } else if (totalSeconds < 19 * 3600) {
        return 'Selamat petang 🌆';
    } else {
        return 'Selamat malam 🌌';
    }
};
const nowtime = getTimeGreeting();
console.log(nowtime); 
// contoh output: "Selamat sore 🌇" kalau jam 16:30
// 
const timestampe = speed();
const latensie = speed() - timestampe
const used = process.memoryUsage();
const cpu = os.cpus()[0];
const totalCpuUsage = (100 * (cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.irq) / cpu.times.idle).toFixed(2);
const systemName = os.platform() + ' ' + os.release();

var low;
try {
  low = require("lowdb");
} catch (e) {
  low = require("./lib/lowdb");
}

const { Low, JSONFile } = low;
const mongoDB = require("./lib/mongoDB");

global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(false).parse()
);
global.db = new Low(
  /https?:\/\//.test(opts["db"] || "")
    ? new cloudDBAdapter(opts["db"])
    : /mongodb/.test(opts["db"])
      ? new mongoDB(opts["db"])
      : new JSONFile(`src/database.json`)
);
global.DATABASE = global.db; // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ)
    return new Promise((resolve) =>
      setInterval(function () {
        !global.db.READ
          ? (Interval(this),
            resolve(
              global.db.data == null ? global.loadDatabase() : global.db.data
            ))
          : null;
      }, 1 * 1000)
    );
  if (global.db.data !== null) return;
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {}),
  };
  global.db.chain = _.chain(global.db.data);
};
loadDatabase();
global.db = JSON.parse(fs.readFileSync("./src/database.json"));
if (global.db)
  global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {}),
  };


//
let isSleeping = false; // Move the declaration here.
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let kaiaudio = JSON.parse(fs.readFileSync('./Media-Database/audio.json'));
let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json')); //
let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
var myHari = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var tgel = new Date();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();



//
module.exports = A17 = async (A17, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    const prefix = global.prefa
    const isCmd = body.startsWith(prefix)
    const notCmd = body.startsWith('')
    const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const botNumber = await A17.decodeJid(A17.user.id)
    const isCreator = [botNumber, ...global.Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const itsMe = m.sender == botNumber ? true : false
    const text = args.join(" ")
    const from = m.chat
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)
    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
    const groupMetadata = m.isGroup ? await A17.groupMetadata(m.chat).catch(e => { }) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    const groupOwner = m.isGroup ? groupMetadata.owner : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isUser = pendaftar.includes(m.sender)
    const isBan = banUser.includes(m.sender)
    const welcm = m.isGroup ? wlcm.includes(from) : false
    const isBanChat = m.isGroup ? banchat.includes(from) : false
    const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    const antiWame = m.isGroup ? ntwame.includes(from) : false
    const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
    autoreadsw = true
    const content = JSON.stringify(m.message)
    const q = args.join(' ')
    // const button = m.body

    const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')



    autoreadsw = true;
    _sewa.expiredCheck(A17, sewa);

    const reply = (teks) => {
      A17.sendMessage(m.chat, { text: teks }, { quoted: m })
    }


    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const senderNumber = sender.split('@')[0]

    function randomNomor(angka) {
      return Math.floor(Math.random() * angka) + 1;
    }

	if (m.message) {
	  addBalance(m.sender, randomNomor(574), balance);

	  const waktuLog = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }).replace(',', '');
	  const namaPengirim = pushname || 'No Name';
	  const isGrup = m.isGroup ? `Group: ${groupName || namaPengirim}` : 'Private Chat';
	  const pesan = budy || m.mtype;

	  console.log(chalk.green.bold('\n📥 Pesan Masuk'));
	  console.log(chalk.blue('🟢 From   :'), chalk.yellow(namaPengirim), chalk.gray(`(${m.sender.split('@')[0]})`));
	  console.log(chalk.blue('📨 In     :'), chalk.cyan(`${isGrup} (${m.chat})`));
	  console.log(chalk.blue('💬 Msg    :'), chalk.white(pesan));
	  console.log(chalk.blue('🕒 Waktu  :'), chalk.white(`${waktuLog} WIB`));
	  console.log(chalk.gray('────────────────────────────────────────────'));
	}


    if (isCmd && !isUser) {
      pendaftar.push(m.sender);
      fs.writeFileSync("./storage/user/user.json", JSON.stringify(pendaftar));
    }

    if (global.autoreadgc) {
      if (command) {
        await A17.sendPresenceUpdate('composing', m.chat);

        // Create an array of message keys to mark as read
        const keysToMarkAsRead = [
          {
            remoteJid: m.chat,
            id: m.key.id,
            participant: m.sender,
          },
          // You can add more message keys to mark multiple messages as read
        ];

        // Use the sock object to read the specified messages
        await A17.readMessages(keysToMarkAsRead);
      }
    }


    if (global.autoRecord) {
      if (m.chat) {
        A17.sendPresenceUpdate("recording", m.chat);
      }
    }

    if (global.autoTyping) {
      if (m.chat) {
        A17.sendPresenceUpdate("composing", m.chat);
      }
    }

    if (global.available) {
      if (m.chat) {
        A17.sendPresenceUpdate("available", m.chat);
      }
    }

    for (let anju of kaiaudio) {
      if (budy === anju) {
        result = fs.readFileSync(`./Assets/audio/${anju}.mp3`)
        A17.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
      }
    }

    const formatTime = (seconds) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    function updateStatus() {
      const uptimeInSeconds = Math.floor(process.uptime());
      const uptimeFormatted = formatTime(uptimeInSeconds);

      // const status = `
      // ㅤㅤ〄ㅤㅤ〘 A17 Personal Edition 〙ㅤㅤ〄ㅤㅤㅤㅤ
      // ㅤㅤㅤ〘ㅤ Auto Uptime: ${uptimeFormatted}ㅤ〙`;

     function _0x582b(_0xabb6f8, _0x12cdd8) { const _0x58e890 = _0x58e8(); return _0x582b = function (_0x582b90, _0x4387b3) { _0x582b90 = _0x582b90 - 0x189; let _0x932613 = _0x58e890[_0x582b90]; return _0x932613; }, _0x582b(_0xabb6f8, _0x12cdd8); } function _0x58e8() { const _0x109554 = ['12896370RDSmnX', '3BgvPel', '189HbmdoW', '18854HvEPNh', '11TZHUID', '9125326EcyeIg', '464328lPaAMf', '3400722cbWEOK', '2263175KIczdo', '12TaHNqM', '2521564eqJRHK']; _0x58e8 = function () { return _0x109554; }; return _0x58e8(); } (function (_0x429d7b, _0x532ab5) { const _0x527567 = _0x582b, _0x130eb4 = _0x429d7b(); while (!![]) { try { const _0x75c57a = -parseInt(_0x527567(0x18b)) / 0x1 + -parseInt(_0x527567(0x192)) / 0x2 * (-parseInt(_0x527567(0x189)) / 0x3) + parseInt(_0x527567(0x191)) / 0x4 * (-parseInt(_0x527567(0x190)) / 0x5) + -parseInt(_0x527567(0x18f)) / 0x6 + parseInt(_0x527567(0x18d)) / 0x7 + parseInt(_0x527567(0x18e)) / 0x8 * (-parseInt(_0x527567(0x18a)) / 0x9) + parseInt(_0x527567(0x193)) / 0xa * (parseInt(_0x527567(0x18c)) / 0xb); if (_0x75c57a === _0x532ab5) break; else _0x130eb4['push'](_0x130eb4['shift']()); } catch (_0x19ea04) { _0x130eb4['push'](_0x130eb4['shift']()); } } }(_0x58e8, 0xa8dae)); const status = '〄ㅤㅤ〘\x20NEWBIE\x20STORE\x20VPN\x20〙ㅤㅤ〄';

      A17.setStatus(status); // Set the status using A17.setStatus or your equivalent method

      // Update the status randomly within 5 minutes (300000 milliseconds)
      const randomTime = Math.floor(Math.random() * 300000) + 15000; // don't edit.
      setTimeout(updateStatus, randomTime);
    }

    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)]
    }

    const responses = {

      gcvip: `https://chat.whatsapp.com/DPaquwU3PBhAb50oHM39mh\n\nSilahkan Join Grup Member Vip Kak, Grup ini untuk info server, Kontak Alternatif Admin, Dan info Info penting lainnya`,
      playloaden: `GET / HTTP/1.1[crlf]Host: [host][crlf]PATCH / HTTP/1.1[crlf]Host: Bug.com[crlf]Upgrade: websocket [crlf] User-Agent: [ua][crlf][crlf]Content-Length: CONFIG BY. NEWBIE[crlf][crlf][split]200 OK [crlf]`,
      playloadws: `GET / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf]User-Agent: [ua][crlf][crlf][split]CONFIG BY. NEWBIE[crlf][crlf]`,
      hello: `Hello ${pushname}, I am ${BotName}. My current prefix is "${prefix}". How can I help you?`,
      kai: `My Boss is lost in another Multiverse, and I lost connection with him...`,
      runtime: `Hey ${pushname}\n${nowtime}\n\nMy runtime:${runtime(process.uptime())}\n\nPrefix is: *${prefix}*\n\nTime: ${kaitime}\n\nDate: ${kaidate}\n\nToday is ${currentDay}`,
      konichiwa: `Konichiwa ${pushname}, I am ${BotName}. How can I help you?`,
      sasha: 'Only you...🫶🏻',
      ping: `Hey ${pushname}, Pong ${latensie.toFixed(4)} ms`,
      'good morning': `Good morning to you too ${pushname} ☺️. Have a great day 😇.`,
      ohayo: `Good morning to you too ${pushname} ☺️. Have a great day 😇.`,
      'good afternoon': `Good afternoon to you too ${pushname} ✨. Wishing you an enjoyable afternoon too 😇🤞🏻.`,
      konnichiwa: `Good afternoon to you too ${pushname} ✨. Wishing you an enjoyable afternoon too 😇🤞🏻.`,
      'good night': `Good night to you too ${pushname} 😇. Sleep well and sweet dreams.`,

    };

    const smallinput = budy.toLowerCase();

    if (responses.hasOwnProperty(smallinput)) {
      reply(responses[smallinput]);
    }
		
const keyword = budy.toLowerCase();
if (['pay', 'dana' , 'payment'].includes(keyword)) {
    const teksPath = path.join(__dirname, './database/tekspay.json');

    let teks = 'Pembayaran via QRIS';
    if (fs.existsSync(teksPath)) {
        const teksData = JSON.parse(fs.readFileSync(teksPath));
        teks = teksData.text || teks;
    }

		try {
        const buttonMessage = {
            image: { url: global.Qris },
            caption: teks,
            headerType: 4
        };
        return A17.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        return reply(teks); // fallback jika tidak ada gambar
    }
}

// ================ 1. REUSABLE FUNCTION ================
async function sendPayload(m, { title, payload }) {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  
  await A17.sendMessage(from, { react: { text: "🚀", key: m.key } });
  
  const message = `*◇━━━${title}━━━◇*\n${payload}`;
  
  await A17.sendMessage(m.chat, {
    text: message,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        title: `${nowtime} ${pushname}`,
        body: global.BotName,
        thumbnailUrl: global.Thumb,
        sourceUrl: global.website,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
}

// ================ 2. PAYLOAD DATABASE (ALL CASES) ================
const payloadDB = {
  // [1] TELKOMSEL
  tselopok: {
    title: "ILPED OPOK KALSEL & SUMSEL UNLI",
    payload: "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: [rotate=tsel.me;loop.co.id][crlf]Expect: 200-continue[crlf][crlf][split][crlf][crlf]CF-RAY / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: Websocket[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nProxy: 172.67.175.171:80"
  },
  tselilped: {
    title: "ILPED/RGURU TSEL",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nJabar:\nGET / HTTP/1.1[crlf]Host: edu.ruangguru.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nProxy: 104.26.7.172, bakrie.ac.id, unnes.ac.id"
  },

  // [2] BYU RUANGGURU
  byurg: {
    title: "BYU TSEL RUANGGURU",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nJabar:\nGET / HTTP/1.1[crlf]Host: www.kelas.ruangguru.com[crlf][crlf]PATCH /ssh-ws [protocol][crlf]Host: [host][crlf]Upgrade: websocket[crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf][crlf]\n\nProxy: sekolahonline.ruangguru.com"
  },

  // [3] BYU GGWP
  byuggwp: {
    title: "BYU GGWP",
    payload: "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: 104.19.143.108[crlf][crlf]CF-RAY / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: Websocket[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nProxy: 104.19.143.108"
  },

  // [4] AXIS SUSHIROLL
  axissushiroll: {
    title: "AXIS SUSHIROLL",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nJabar:\nGET / HTTP/1.1[crlf]Host: sushiroll.co.id[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/ 1[crlf][crlf]\n\nProxy: www.sushiroll.co.id, blog.sushiroll.co.id"
  },

  // [5] XL/AXIS EDU
  xledu: {
    title: "XL/AXIS EDU",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nJabar:\nHEAD / HTTP/1.1[crlf]Host: io.ruangguru.com[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]BMOVE / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf]\n\nProxy: 104.17.70.206, 104.17.3.81"
  },

  // [6] ISAT FUN
  isatfun: {
    title: "ISAT FUN",
    payload: "GET / HTTP/1.1[crlf]Host: [Host][crlf]Upgrade: websocket [crlf][crlf]\n\nPayload2:\nGET /cdn-cgi/trace HTTP/1.1[crlf]Host: creativeservices.netflix.com[crlf][crlf]CF-RAY / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: Websocket[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nProxy: 104.17.241.25, creativeservices.netflix.com"
  },

  // [7] XL FLEX
  xlflex: {
    title: "XL/AXIS FLEX",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nJabar:\nPATCH /ssh-ws HTTP/1.1[crlf]Host: [host][crlf]Host: ava.game.naver.com[crlf]Upgrade: websocket[crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf][crlf]\n\nProxy: ava.game.naver.com, df.game.naver.com"
  },

  // [8] XL/AXIS SOSMED
  xlsosmed: {
    title: "XL/AXIS SOSMED",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nJabar:\nGET / HTTP/1.1[crlf]Host: www.help.tinder.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nProxy: www.help.tinder.com, investor.fb.com\n\nSNI: graph.instagram.com"
  },

  // [9] XL VISION+
  xlvision: {
    title: "XL VISION+",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nJabar:\nGET / HTTP/1.1[crlf]Host: partners-mplay.visionplus.id[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/ 1[crlf][crlf]\n\nProxy: 104.18.225.52, api.visionplus.id"
  },

  // [10] XL/AXIS VIDIO
  xlvidio: {
    title: "XL/AXIS VIDIO",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nJabar:\nGET / HTTP/1.1[crlf]Host: vidio.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nProxy: 104.22.4.240, quiz.vidio.com"
  },

  // [11] XL/AXIS CONFERENCE
  xlcon: {
    title: "XL/AXIS CONFERENCE",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nJabar:\nPATCH /ssh-ws HTTP/1.1[crlf]Host: [host][crlf]Host: partner.zoom.us[crlf]Upgrade: websocket[crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf][crlf]\n\nProxy: 170.114.45.0, gomarketplacefront-cf.zoom.us"
  },

  // [12] XL/AXIS GAME
  axisgame: {
    title: "XL/AXIS GAME",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nJabar:\nPATCH / HTTP/1.1[crlf]Host: [host][crlf]Host: cdn.appsflyer.com[crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]\n\nProxy: poe.garena.com, 104.16.108.96"
  }
};

	  
const slideButton = async (jid, mention = []) => {

let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync('./Assets/Ne.jpg')}, { upload: A17.waUploadToServer })
    function readJSON(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const parsed = JSON.parse(data);
            return parsed.text && parsed.text.trim() ? parsed.text : null;
        } catch (err) {
            console.error(`Error reading ${filePath}:`, err);
            return null;
        }
    }
	
const promoText = readJSON('./database/promo.json');
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*${global.BotName}* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: promoText, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{"display_text":"ORDER","url":"global.website","merchant_url":"https://wa.me/c/6285929880376"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: autoscriptText, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{"display_text":"JOIN GRUP","url":"https://gcwa.nevpn.site","merchant_url":"https://gcwa.nevpn.site"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: recodeText, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{"display_text":"LIHAT SALURAN","url":"https://saluran.nevpn.site","merchant_url":"https://saluran.nevpn.site"}`
}]
})
}]
})
})}
}}, {userJid: m.sender})
await A17.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

    const responin = { 
    produk: `Jangan Dirubah`,
    };

    const inputen = budy.toLowerCase();
    
    if (responin.hasOwnProperty(inputen)) {
			await slideButton(m.chat)
      }

    //============= [LIST RESPONCE CHECKING START ]================

    //-----------------------------------------------------------------------------------------------------------------------------------//
    try {
      if (m.mtype === "interactiveResponseMessage") {
        console.log("interactiveResponseMessage Detected!")
        let msg = m.message[m.mtype] || m.msg
        if (msg.nativeFlowResponseMessage && !m.isBot) {
          let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}
          if (id) {
            let emit_msg = {
              key: { ...m.key }, // SET RANDOME MESSAGE ID  
              message: { extendedTextMessage: { text: id } },
              pushName: m.pushName,
              messageTimestamp: m.messageTimestamp || 754785898978
            }
            return A17.ev.emit("messages.upsert", { messages: [emit_msg], type: "append" })
          }
        }
      }
    } catch (e) { console.log("ERROR WHILE CHECKING LIST RESPONCE : ", e) }
    //============= [LIST RESPONCE CHECKING END ]================

    //-----------------------------------------------------------------------------------------------------------------------------------//


    switch (command) {


      //
	  case "produk": {
			await slideButton(m.chat)
		}
		break
	
case 'uploadfile': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!isCreator) return reply(mess.botowner);

  await A17.sendMessage(from, { react: { text: "📤", key: m.key } });

  try {
    const directory = path.join(__dirname, './database/filehc');
    if (!fs.existsSync(directory)) {
      return reply('❌ Folder filehc tidak ditemukan.');
    }

    const files = fs.readdirSync(directory).filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.zip', '.hc', '.txt', '.gz'].includes(ext);
    });

    if (files.length === 0) {
      return reply(`📂 Tidak ada file yang ditemukan silahkan update database file dengan menu ${prefix}updatehczip`);
    }

    const delayPerFile = 10000;
    const estimatedTotalMs = files.length * delayPerFile;
    const estimatedMinutes = Math.ceil(estimatedTotalMs / 60000);

    const now = new Date();
    const finishTime = new Date(now.getTime() + estimatedTotalMs);
    const finishHour = finishTime.getHours().toString().padStart(2, '0');
    const finishMinute = finishTime.getMinutes().toString().padStart(2, '0');

    reply(`📂 Mulai proses upload file ke Sfile.mobi...
Estimasi selesai dalam sekitar *${estimatedMinutes} menit* 
atau sekitar jam *${finishHour}:${finishMinute}* WIB.
Mohon bersabar...`);

    const versionFilePath = path.join(__dirname, './database/version.json');
    let versionData = { version: 1 };
    if (fs.existsSync(versionFilePath)) {
      const rawData = fs.readFileSync(versionFilePath);
      versionData = JSON.parse(rawData);
    }

    let hasilUpload = [];
    let terkenaLimit = false;

    for (const file of files) {
      const link = await uploadFileWithRetry(file, versionData.version);
      if (link) {
        hasilUpload.push(`*${file}*\n${link}`);
      } else {
        terkenaLimit = true;
        hasilUpload.push(`*${file}*\n❌ Gagal upload (kemungkinan limit harian tercapai)`);
        break; // Hentikan proses upload
      }
      await sleep(1000);
    }

    // Tambah versi hanya jika tidak terkena limit
    if (!terkenaLimit) {
      versionData.version += 1;
      fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2));
      console.log(`[SFILE] ✅ Version updated to: ${versionData.version}`);
    }

    const listUpload = hasilUpload.join('\n\n');
    let pesan = `*_NEW UPDATE CONFIG TO SFILE_*\nGrup : ${global.GroupLink}\nLIST FILE:\n━━━━━━━━━━━━━━━━━━━━\n${listUpload}\n━━━━━━━━━━━━━━━━━━━━\nThanks To *_${BotName}_*`;

    if (terkenaLimit) {
      pesan = `⚠️ *UPLOAD DIHENTIKAN!*\nAkun telah mencapai *limit upload harian*.\nBerikut file yang berhasil diupload:\n\n━━━━━━━━━━━━━━━━━━━━\n${listUpload}\n━━━━━━━━━━━━━━━━━━━━\nSilakan lanjutkan besok atau gunakan akun lain.`;
    }

    await A17.sendMessage(from, { text: pesan });

  } catch (error) {
    console.error('❌ Error saat upload file:', error);
    reply('❌ Terjadi kesalahan saat proses upload.');
  }
}
break;




      case 'qt': {
        if (!args[0] && !m.quoted) {
          return m.reply(`Please provide a text (Type or mention a message) !`);
        }

        try {
          let userPfp;
          if (m.quoted) {
            userPfp = await A17.profilePictureUrl(m.quoted.sender, "image");
          } else {
            userPfp = await A17.profilePictureUrl(m.sender, "image");
          }

          const waUserName = pushname;
          const quoteText = m.quoted ? m.quoted.body : args.join(" ");

          const quoteJson = {
            type: "quote",
            format: "png",
            backgroundColor: "#FFFFFF",
            width: 700,
            height: 580,
            scale: 2,
            messages: [
              {
                entities: [],
                avatar: true,
                from: {
                  id: 1,
                  name: waUserName,
                  photo: {
                    url: userPfp,
                  },
                },
                text: quoteText,
                replyMessage: {},
              },
            ],
          };

          const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
            headers: { "Content-Type": "application/json" },
          });

          const buffer = Buffer.from(quoteResponse.data.result.image, "base64");
          A17.sendImageAsSticker(m.chat, buffer, m, {
            packname: `${global.BotName}`,
            author: waUserName,
          });
        } catch (error) {
          console.error(error);
          m.reply("Error generating quote!");
        }
        break;
      }
      case 'owner': case 'creator': case 'mod': case 'mods': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        A17.sendMessage(from, { react: { text: "💫", key: m.key } })
        A17.sendContact(m.chat, global.Owner, m)
      }
        break;
      case 'public': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.owner)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })

        A17.public = true
        reply('I am now Publicly accessable!')
        A17.setStatus(`Mode : Public`)
      }
        break;


      case 'self': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)

        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        A17.public = false
        reply('Only Owner can use me now!')
        A17.setStatus(`Mode : Self`)
      }
        break;

      //Hosted platfrom info
      case 'server':
      case 'sysinfo': {

        const respon = `
  🤖 *Newbie Bot Server Info* 🤖
  
  *System*: ${systemName}
  
  *RAM*: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
  *NodeJS Memory Usage*: ${Object.keys(used).map(key => `${key}: ${formatp(used[key])}`).join(', ')}
  
  *Total CPU Usage*: ${totalCpuUsage}%
  
  *CPU Model*: ${cpu.model.trim()} (${cpu.speed} MHz)
  
  *Runtime*: ${runtime(process.uptime())}
  
  *Response Speed*: ${latensie.toFixed(4)} seconds
  `.trim();

        m.reply(respon);
        break;
      }



      case 'serverip':
      case 'ip': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        async function getServerIp() {
          try {
            const response = await axios.get('https://api.ipify.org?format=json');

            const serverIp = response.data.ip;

            return serverIp;
          } catch (error) {

            console.error('Error fetching server IP address:', error.message);
            return null;
          }
        }

        getServerIp()
          .then(serverIp => {
            if (serverIp) {
              const message = `The bot's IP address is: ${serverIp}`;
              A17.sendMessage(from, { text: message }, { quoted: m });
            } else {
              A17.sendMessage(from, { text: 'Failed to fetch server IP address.' }, { quoted: m });
            }
          })
          .catch(error => {
            console.error('Error:', error.message);
            A17.sendMessage(from, { text: 'An error occurred while fetching the server IP address.' }, { quoted: m });
          });
	}
        break;

        case 'restart': {
        await A17.sendMessage(from, { react: { text: "⚙", key: m.key } });
        if (!isCreator) return reply(mess.botowner)

        await A17.sendMessage(from, { text: mess.waiting });
        await A17.sendMessage(from, { react: { text: "✅", key: m.key } });
        await A17.sendMessage(from, { text: 'Restarting Success!' });

        // Delay the shutdown by 5 seconds using sleep function
        //await sleep(5000);

        // Use PM2 to restart the script
        pm2.restart('Nebot', (err) => {
          if (err) {
            A17.sendMessage(from, { react: { text: "❌", key: m.key } });
            A17.sendMessage(from, { text: 'Restarting Failed!' });
          } else {
            return;
          }
        });
		}
        break;

case 'domaincheck':
case 'checkdomain': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);

  if (!args[0]) {
    return reply(`Please provide a domain to check.\nExample: ${prefix}domaincheck example.com`);
  }

  const domain = args[0];

  try {
    // Resolve the domain to get its IP
    const dns = require('dns').promises;
    const lookup = await dns.lookup(domain);

    if (!lookup || !lookup.address) {
      return reply(`Could not resolve the domain: ${domain}`);
    }

    const ipAddress = lookup.address;

    // Encode the IP address
    const encodedIpAddress = encodeURIComponent(ipAddress);

    // Construct the API URL with ipwhois
    const apiUrl = `https://ipwhois.app/json/${encodedIpAddress}`;

    // Fetch IP location data
    const axios = require('axios');
    const response = await axios.get(apiUrl);

    if (response.data.success === false) {
      return reply('Failed to fetch IP location data. Please try again later.');
    }

    const locationData = response.data;

    const message = `
Domain: ${domain}
Resolved IP Address: ${ipAddress}
Country: ${locationData.country}
Region: ${locationData.region}
City: ${locationData.city}
Timezone: ${locationData.timezone}
Latitude: ${locationData.latitude}
Longitude: ${locationData.longitude}
ISP: ${locationData.isp}
    `;

    A17.sendMessage(from, { text: message }, { quoted: m });
  } catch (error) {
    console.error('Error fetching domain/IP location data:', error);
    reply('Failed to fetch domain or IP location data. Please try again later.');
  }
}
  break;

      case 'ls':{
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "📂", key: m.key } });

        const currentDir = process.cwd(); // Get the current working directory

        try {
          const files = fs.readdirSync(currentDir);
          let folderName = `Files in ${currentDir}:\n\n`;
          let fileList = files.join('\n'); // Join the file names with a newline
          A17.sendMessage(from, { text: folderName + fileList }, m);
        } catch (error) {
          console.error(error);
          A17.sendMessage(from, { text: 'Error reading directory contents.🫳🏻' }, m);
        }
	  }       
	   break;


      case 'autostatus':
      case 'auto-status':
      case 'statusevent':
      case 'autostatusseen':{

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        A17.sendMessage(from, { react: { text: '❤', key: m.key } });

        if (args.length === 0) {
          // Display the current status of autostatus
          return m.reply(`Auto-Status is currently ${global.statusseen ? 'enabled' : 'disabled'}.`);
        } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
          const status = args[0];
          if (status === 'on') {
            global.statusseen = true;
            return m.reply('Auto-Status is now enabled.');
          } else {
            global.statusseen = false;
            return m.reply('Auto-Status is now disabled.');
          }
        } else {
          return m.reply(`Usage: ${global.prefa[0]}autostatus [on/off]`);
        }
	  }       
	   break;


      case 'ban': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!args[0]) return reply(`Select add or del (add to ban, del to unban), For Example: reply *${prefix}ban add* to the user you want to ban.`)
        if (args[1]) {
          orgnye = args[1] + "@s.whatsapp.net"
        } else if (m.quoted) {
          orgnye = m.quoted.sender
        }
        const isBane = banUser.includes(orgnye)
        if (args[0] === "add") {
          if (isBane) return ads('User is already banned.')
          banUser.push(orgnye)
          reply(`Successfully Banned the user.`)
        } else if (args[0] === "del") {
          if (!isBane) return ads('User is already unbanned.')
          let delbans = banUser.indexOf(orgnye)
          banUser.splice(delbans, 1)
          reply(`Successfully Unbanned the user.`)
        } else {
          reply("Error")
        }
      }
        break;

      case 'emojimix': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })

        if (!q) reply(`*Example :* ${prefix + command} 😊+🌹`)
        let [emoji1, emoji2] = q.split`+`
        let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
        for (let res of kuntuh.results) {
          let encmedia = await A17.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
          await fs.unlinkSync(encmedia)
        }
      }
        break;

      case 'getcase': {
        if (isBan) return reply(mess.banned);
        if (m.sender != '6282326322300@s.whatsapp.net') { return; }

        if (isBanChat) return reply(mess.bangc);

        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })

        const getCase = (cases) => {
          return "case" + `'${cases}'` + fs.readFileSync("Core.js").toString().split('case \'' + cases + '\'')[1].split("break;")[0] + "break;"
        }
        reply(`${getCase(q)}`)
	  }       
	   break;


      case 'addcase': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);


        if (m.sender !== '6282326322300@s.whatsapp.net') {
          return reply('You are not authorized to use this command.');
        }

        if (args.length < 2) {
          return reply('Invalid usage! Please provide the case name and its functionality.');
        }

        const caseName = args[0];
        const functionality = args.slice(1).join(' ');

        fs.readFile('./Core.js', 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading Core.js:', err);
            return reply('Failed to add case. Please try again later.');
          }

          const newCase = `
          case '${caseName}': {
            ${functionality}
          }
          break;
          `;

          const insertIndex = data.indexOf('switch (command) {') + 'switch (command) {'.length;

          const newData = data.slice(0, insertIndex) + newCase + data.slice(insertIndex);

          fs.writeFile('./Core.js', newData, 'utf8', (err) => {
            if (err) {
              console.error('Error writing to Core.js:', err);
              reply('Failed to add case. Please try again later.');
            } else {
              reply('New case added successfully!');
            }
          });
        });
      }
        break;


      case 'emoji': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })

        if (!args.join(" ")) return reply('Where is the emoji?')
        emoji.get(args.join(" ")).then(async (emoji) => {
          let mese = await A17.sendMessage(m.chat, { image: { url: emoji.images[4].url }, caption: `Here it is...` }, { quoted: m })
          await A17.sendMessage(from, { text: "reply -s to this image to make sticker" }, { quoted: mese })
        })
      }
        break;

      case 'deleteall': case 'delall': case 'delete': case 'del': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })

        if (!m.quoted) return reply('Please mention a message baka!')
        let { chat, fromMe, id } = m.quoted

        const key = {
          remoteJid: m.chat,
          fromMe: false,
          id: m.quoted.id,
          participant: m.quoted.sender
        }

        await A17.sendMessage(m.chat, { delete: key })
      }
        break;

      case 'ghstalk': case 'githubstalk': case 'github': {
        A17.sendMessage(from, { react: { text: "🔍", key: m.key } })

        if (!q) return reply(`Give me a user name like *${prefix}github Kai0071*`)

        gitdata = await githubstalk.githubstalk(`${q}`)
        A17.sendMessage(m.chat, {
          image: { url: gitdata.profile_pic }, caption:
            `*ㅤㅤㅤ|ㅤㅤㅤGithub Info ㅤㅤㅤ|\*

  🚩 Id : ${gitdata.id}
  🔖 Nickname : ${gitdata.nickname}
  🔖 Username : ${gitdata.username}
  ✨ Bio : ${gitdata.bio}
  🏢 Company : ${gitdata.company}
  📍 Location : ${gitdata.location}
  📧 Email : ${gitdata.email}
  🔓 Public Repo : ${gitdata.public_repo}
  🔐 Public Gists : ${gitdata.public_gists}
  💕 Followers : ${gitdata.followers}
  👉 Following : ${gitdata.following}`
        }, { quoted: m })
      }
        break;

      case 'git':
      case 'gitclone':
      case 'git-clone': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        A17.sendMessage(from, { react: { text: "💫", key: m.key } });

        if (!args[0]) {
          return reply(`Please provide the GitHub repository link.\nExample:\n${prefix}${command} https://github.com/Kai0071/A17`);
        }

        if (!isUrl(args[0]) || !args[0].includes('github.com')) {
          return reply(`Invalid or non-GitHub repository link provided. Please use a valid GitHub repository link.`);
        }

        try {
          let splitURL = args[0].split('github.com/');
          if (splitURL.length < 2) throw Error('Invalid GitHub URL');

          let [githubUser, githubRepo] = splitURL[1].split('/');
          githubRepo = githubRepo.replace('.git', '');

          let gitZipUrl = `https://api.github.com/repos/${githubUser}/${githubRepo}/zipball`;

          await A17.sendMessage(from, { text: `${pushname}, Please wait, downloading...` });


          let zipHeaders = await fetch(gitZipUrl, { method: 'HEAD' }).then(res => res.headers);
          let zipFilename = zipHeaders.get('content-disposition').match(/attachment; filename=(.*)/)[1];

          await A17.sendMessage(m.chat, { document: { url: gitZipUrl }, fileName: zipFilename + '.zip', mimetype: 'application/zip' }, { quoted: m });
        } catch (err) {
          console.error(err);
          return reply(`Failed to fetch the repository contents. Please ensure the GitHub link is correct and accessible. Use the format: 'https://github.com/username/repository'.`);
        }
	  }
        break;


      case 'listpc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })

        let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
        let teks = ` 「  Nebot pm user list  」\n\nTotal ${anu.length} users are using A17 in personal chat.`
        for (let i of anu) {
          teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
        }
        A17.sendTextWithMentions(m.chat, teks, m)
      }
        break;


      case 'listgc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
let getallgrub = await A17.groupFetchAllParticipating();
async function formatGrup(index, grup) {
    let response2 = '-';
    let link_grouplist = '';
try {
response2 = await A17.groupInviteCode(grup.id);
    link_grouplist = `https://chat.whatsapp.com/${response2}`;
} catch{
    link_grouplist = '-'
}
return `╭─「 ${index} 」 *${grup.subject}*
│ Anggota : ${grup.participants.length}
│ ID Grub : ${grup.id}
│ Link    : ${link_grouplist}
╰────────────────────────`;
}
const grupTerurut = Object.values(getallgrub).sort((a, b) => b.participants.length - a.participants.length);
let nomorUrut = 0;
const listGrupString = await Promise.all(grupTerurut.map((grup) => formatGrup(++nomorUrut, grup)));

return reply(`_*Total Group : ${nomorUrut}*_ \n\n`+listGrupString.join('\n\n'));
break;
	  }
	  
	  case 'totalgc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
    let totalGc = await A17.groupFetchAllParticipating();
    let totalGroups = Object.keys(totalGc).length;

    return reply(`_Total Group : *${totalGroups}*_`);
	  }
	break;

      case 'speedtest': case 'speedcheck': {
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })

        m.reply(`Plz Wait ${pushname} Testing Speed... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        try {
          o = await exec('python speed.py')
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;

		//MOD NEWBIE// SET TEXT PROMO
case 'setqris': {

    if (!isCreator) return reply('❌ Hanya owner yang bisa mengatur QRIS');

    const quoted = m.quoted || m;
    const teks = args.join(" ");

    if (!teks) return reply('❌ Masukkan teks pembayaran setelah perintah! \n Contoh : /setqris kirim ke nomer rekening ini yah kaka 6281xxxx');
    // Simpan teks
    const teksPath = path.join(__dirname, './database/tekspay.json');
    fs.writeFileSync(teksPath, JSON.stringify({ text: teks }, null, 2));

    reply('✅ QRIS dan teks pembayaran berhasil disimpan!');
}
break;

case 'setwebsite': {
    if (!isCreator) return reply(mess.botowner);

    const newWebsite = args[0];
    const urlRegex = /^(https?:\/\/[^\s]+)$/;

    if (!urlRegex.test(newWebsite)) {
        return reply('❌ Masukkan URL yang valid. Contoh: .setwebsite https://example.com');
    }

    const configPath = './config.js';
    try {
        let content = fs.readFileSync(configPath, 'utf8');

        // Ganti baris global.website dengan URL baru
        const newContent = content.replace(/(global\.website\s*=\s*")[^"]*(")/, `$1${newWebsite}$2`);

        fs.writeFileSync(configPath, newContent);
        global.website = newWebsite; // update di runtime juga

        reply(`✅ Website global berhasil diubah menjadi:\n${newWebsite}`);
    } catch (err) {
        console.error('❌ Gagal mengupdate config.js:', err);
        reply('❌ Gagal menyimpan website baru.');
    }

    break;
}
case 'setapi': {
    if (!isCreator) return reply(mess.botowner);
    
    let api = text.trim();
    if (!api) return reply('❌ Format salah!\nContoh: .setapi <token_api_do>');

    const path = './config.js'; // Lokasi file config.js kamu

    // Baca file config.js
    let configContent = fs.readFileSync(path, 'utf8');

    // Ganti global.token_do
    configContent = configContent.replace(
        /global\.token_do\s*=\s*["'].*?["'];/,
        `global.token_do = "${api}";`
    );

    // Tulis ulang file config.js
    fs.writeFileSync(path, configContent, 'utf8');

    // Update global runtime juga (optional)
    global.token_do = api;

    reply(`✅ Token API DO berhasil diubah!\n\n🔑 API: ${api}`);
    break;
}


case 'setemailpass': {
    if (!isCreator) return reply(mess.botowner);
    
    let [email, password] = text.split('|');
    if (!email || !password) return reply('❌ Format salah!\nContoh: .setemailpass newemail@gmail.com|passwordbaru');

    const path = './config.js'; // Lokasi file config.js kamu

    // Baca file config.js
    let configContent = fs.readFileSync(path, 'utf8');

    // Ganti global.Email dan global.Pass
    configContent = configContent
        .replace(/global\.Email\s*=\s*["'].*?["'];/, `global.Email = "${email}";`)
        .replace(/global\.Pass\s*=\s*["'].*?["'];/, `global.Pass = "${password}";`);

    // Tulis ulang file config.js
    fs.writeFileSync(path, configContent, 'utf8');
	global.Email = email;
    global.Pass = password;
    reply(`✅ Email dan Password berhasil diubah!\n\n📧 Email: ${email}\n🔑 Password: ${password}`);
    
    break;
}

case 'setbanner': {
    if (!isCreator) return reply(mess.botowner);

    const newThumbUrl = args[0];
    const urlRegex = /^(https?:\/\/[^\s]+)$/;

    if (!urlRegex.test(newThumbUrl)) {
        return reply('❌ Masukkan URL gambar yang valid. Contoh: .setthumb https://example.com/thumb.jpg');
    }

    const configPath = './config.js';
    try {
        let content = fs.readFileSync(configPath, 'utf8');

        // Ganti baris global.Thumb dengan URL gambar baru
        const newContent = content.replace(/(global\.Thumb\s*=\s*")[^"]*(")/, `$1${newThumbUrl}$2`);

        fs.writeFileSync(configPath, newContent);
        global.Thumb = newThumbUrl; // update di runtime juga

        reply(`✅ Thumb global berhasil diubah menjadi:\n${newThumbUrl}`);
    } catch (err) {
        console.error('❌ Gagal mengupdate config.js:', err);
        reply('❌ Gagal menyimpan thumb baru.');
    }

    break;
}

case 'setgruplink': {
    if (!isCreator) return reply(mess.botowner);

    const newGroupLink = args[0];
    const urlRegex = /^(https?:\/\/[^\s]+)$/;

    if (!urlRegex.test(newGroupLink)) {
        return reply('❌ Masukkan link grup yang valid. Contoh: .setgruplink https://chat.whatsapp.com/example');
    }

    const configPath = './config.js';
    try {
        let content = fs.readFileSync(configPath, 'utf8');

        // Ganti baris global.GroupLink dengan link grup baru
        const newContent = content.replace(/(global\.GroupLink\s*=\s*")[^"]*(")/, `$1${newGroupLink}$2`);

        fs.writeFileSync(configPath, newContent);
        global.GroupLink = newGroupLink; // update di runtime juga

        reply(`✅ Link grup global berhasil diubah menjadi:\n${newGroupLink}`);
    } catch (err) {
        console.error('❌ Gagal mengupdate config.js:', err);
        reply('❌ Gagal menyimpan link grup baru.');
    }

    break;
}

case 'setqrislink': {
    if (!isCreator) return reply(mess.botowner);

    const newQrisLink = args[0];
    const urlRegex = /^(https?:\/\/[^\s]+)$/;

    if (!urlRegex.test(newQrisLink)) {
        return reply('❌ Masukkan link grup yang valid. Contoh: .setgruplink https://chat.whatsapp.com/example');
    }

    const configPath = './config.js';
    try {
        let content = fs.readFileSync(configPath, 'utf8');

        // Ganti baris global.QrisLink dengan link grup baru
        const newContent = content.replace(/(global\.Qris\s*=\s*")[^"]*(")/, `$1${newQrisLink}$2`);

        fs.writeFileSync(configPath, newContent);
        global.Qris = newQrisLink; // update di runtime juga

        reply(`✅ Link Qris global berhasil diubah menjadi:\n${newQrisLink}`);
    } catch (err) {
        console.error('❌ Gagal mengupdate config.js:', err);
        reply('❌ Gagal menyimpan link grup baru.');
    }

    break;
}
case 'setjpm': {
    if (!isCreator) return reply(mess.botowner);

    const newInterval = parseInt(args[0]); // ambil argumen pertama

    if (isNaN(newInterval) || newInterval < 0 || newInterval > 24) {
        return reply('❌ Interval tidak valid! Masukkan angka antara 1 - 24 (jam). Contoh: .setinterval 6');
    }

    const configPath = './database/config.json';
    try {
        const currentConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        currentConfig.broadcastIntervalHours = newInterval;

        fs.writeFileSync(configPath, JSON.stringify(currentConfig, null, 2));
        reply(`✅ Interval auto promosi berhasil diubah menjadi setiap *${newInterval} jam*.`);
    } catch (err) {
        console.error('❌ Gagal memperbarui interval:', err);
        reply('❌ Terjadi kesalahan saat menyimpan interval baru.');
    }

    break;
}

case 'delpromo': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);

    A17.sendMessage(from, { react: { text: "🛡️", key: m.key } });

    const filesToDelete = [
        './database/promo.json',
        './database/autoscript.json',
        './database/recode.json',
        './database/VPs.json'
    ];

    try {
        // Menghapus semua file yang ada dalam list
        filesToDelete.forEach(file => {
            if (fs.existsSync(file)) {
                fs.unlinkSync(file);
            }
        });

        await sleep(500);
        reply(`✅ *Semua file berhasil dihapus!*`);
    } catch (error) {
        console.error(error);
        reply(`❌ *Terjadi kesalahan saat menghapus file!*`);
    }
    break;
}

case 'setpromo': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);

    A17.sendMessage(from, { react: { text: "🛡️", key: m.key } });

    if (!args[0]) return reply(`Use ${prefix + command} <text>\nExample: ${prefix + command} Promo Terbaru`);
    const promoText = args.join(" ");
    fs.writeFileSync('./database/promo.json', JSON.stringify({ text: promoText }, null, 2));
    await sleep(500);
    reply(`✅ *Berhasil mengatur teks promo:*\n\n${promoText}`);
    break;
}

// SET TEXT AUTOSCRIPT
case 'setautoscript': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);

    A17.sendMessage(from, { react: { text: "📜", key: m.key } });

    if (!args[0]) return reply(`Use ${prefix + command} <text>\nExample: ${prefix + command} Autoscript Terbaru`);
    const autoscriptText = args.join(" ");
    fs.writeFileSync('./database/autoscript.json', JSON.stringify({ text: autoscriptText }, null, 2));
    await sleep(500);
    reply(`✅ *Berhasil mengatur teks autoscript:*\n\n${autoscriptText}`);
    break;
}

// SET TEXT JASA RECODE
case 'setrecode': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);

    A17.sendMessage(from, { react: { text: "🛠️", key: m.key } });

    if (!args[0]) return reply(`Use ${prefix + command} <text>\nExample: ${prefix + command} Jasa Recode Terbaru`);
    const recodeText = args.join(" ");
    fs.writeFileSync('./database/recode.json', JSON.stringify({ text: recodeText }, null, 2));
    await sleep(500);
    reply(`✅ *Berhasil mengatur teks jasa recode:*\n\n${recodeText}`);
    break;
}

case 'setvps': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);
        A17.sendMessage(from, { react: { text: "📜", key: m.key } });

    if (!args[0]) return reply(`Use ${prefix + command} <text>\nExample: ${prefix + command} VPS Terbaru`);
    const vpsText = args.join(" ");
    fs.writeFileSync('./database/VPs.json', JSON.stringify({ text: vpsText }, null, 2));
    await sleep(500);
    reply(`✅ *Berhasil mengatur teks VPS:*\n\n${vpsText}`);
    break;
}

		
case 'promo': case 'list': case 'produk': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);

    try {
        A17.sendMessage(from, { react: { text: "📝", key: m.key } }); // Reaksi awal
        await sleep(1500); // Delay agar terlihat interaktif

        // Fungsi untuk membaca file JSON
        const readJson = (filePath) => {
            try {
                const data = fs.readFileSync(filePath, 'utf8');
                return JSON.parse(data).text || "";
            } catch (err) {
                console.error(`Error membaca file ${filePath}:`, err);
                return ""; // Mengembalikan string kosong jika file error
            }
        };

        // Membaca file JSON
        const promoText = readJson('./database/promo.json');
        const autoscriptText = readJson('./database/autoscript.json');
        const recodeText = readJson('./database/recode.json');
        const vpsText = readJson('./database/VPs.json');

        // Fungsi untuk mengirim pesan dengan format terpisah
        const sendFormattedMessage = async (title, body) => {
            if (body) {
                let message = {
                    text: `📢 ${body}`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${nowtime}`,
                            body: title,
                            thumbnailUrl: global.Thumb,
                            sourceUrl: global.website,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                };
                await A17.sendMessage(from, message);
                await sleep(1500); // Delay antar pesan
            }
        };

        // Kirim pesan Promo jika ada
        await sendFormattedMessage(
            "Promo Terbaru",
            promoText,
            'https://telegra.ph/file/a9398dd23261b48b5b5c2.jpg'
        );

        // Kirim pesan Autoscript jika ada
        await sendFormattedMessage(
            "Autoscript Tunneling",
            autoscriptText,
            'https://telegra.ph/file/d7c3d152d9fff8f85ee62.jpg'
        );

        // Kirim pesan Jasa Recode jika ada
        await sendFormattedMessage(
            "Jasa Recode",
            recodeText,
            'https://telegra.ph/file/a9398dd23261b48b5b5c2.jpg'
        );

        // Kirim pesan VPS jika ada
        await sendFormattedMessage(
            "VPS Newbie",
            vpsText,
            'https://telegra.ph/file/5dcae7a3d0b3c4d3f60c4.jpg'
        );

        // Cek apakah semua file kosong
        if (!promoText && !autoscriptText && !recodeText && !vpsText) {
            return reply(`❌ Semua pesan kosong!\nGunakan perintah:\n- *${prefix}setpromo <text>*\n- *${prefix}setautoscript <text>*\n- *${prefix}setrecode <text>*\n- *${prefix}setvps <text>*`);
        }

        reply('✅ *Ini adalah List Kami Kaka!*');

    } catch (error) {
        console.error("Error saat membaca file promo/autoscript/recode/vps:", error);
        reply('❌ Terjadi kesalahan saat menampilkan preview pesan. Pastikan format file JSON sudah benar.');
    }
    break;
}

      case 'addmod': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        A17.sendMessage(from, { react: { text: "🛡️", key: m.key } })

        if (!args[0]) return reply(`Use ${prefix + command} number\nExample ${prefix + command} ${OwnerNumber}`)
        bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
        let ceknye = await A17.onWhatsApp(bnnd)
        if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
        Owner.push(bnnd)
        fs.writeFileSync('./database/mod.json', JSON.stringify(Owner))
        reply(`Number ${bnnd} Has Become An Owner!!!`)
	  }
        break;

      case 'delmod': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        A17.sendMessage(from, { react: { text: "🛡️", key: m.key } })

        if (!args[0]) return reply(`Use ${prefix + command} nomor\nExample ${prefix + command} 916297175943`)
        ya = q.split("|")[0].replace(/[^0-9]/g, '')
        unp = Owner.indexOf(ya)
        Owner.splice(unp, 1)
        fs.writeFileSync('./database/mod.json', JSON.stringify(Owner))
        reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
	  }
        break;
		
      case "info": {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        try {

          await A17.sendMessage(from, { react: { text: "❤", key: m.key } });

          let teks = `*Newbie Store*`;

          let msg = generateWAMessageFromContent(m.key.remoteJid, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: teks
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    title: "                 Selamat Datang Di",
                    subtitle: "Download Gratis",
                    hasMediaAttachment: false
                  }),
                              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                      {
                        "name": "cta_url",
                        "buttonParamsJson": `{"display_text":"DOWNLOAD LINK CONFIG HC","url":"https://sfile.mobi/user.php?files&user=681091"}`
                      },
                      {
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"LIST HARGA CONFIG PREMIUM","id":"${prefix}promo"}`
                      },
                      {
                        "name": "cta_url",
                        "buttonParamsJson": `{"display_text":"JOIN GRUP","url": global.website }`
                      },
					  {
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"PEMBAYARAN","id":"${prefix}qr"}`
                      }
                    ]
                  })
                })
              }
            }
          }, {});

          if (!msg || !msg.key || !msg.key.remoteJid || !msg.key.id) {
            const errorMessage = 'Error: Invalid message key.';
            console.error(errorMessage);
            return reply(errorMessage);
          }

          await A17.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
          });
        } catch (error) {
          console.error('Error generating and relaying message:', error);
          return reply('Error generating and relaying message.');
        }

        break;
      }


case 'listdroplet': {
    if (!isCreator) return reply(mess.botowner)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.token_do
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
m.reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
A17.sendMessage(m.chat, { text: mesej }, {quoted: m});
});
} catch (err) {
m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break
case 'sendvps': {
if (!isOwner) return m.reply("Khusus Owner\nBeli Script Di wa.me/6281223566495atau\nt.me/realcoconutdz")
if (!text) return m.reply(`Contoh: ${prefix+command} 628xxx,ip,ram,harga,password`)
xpaytod("*Pesanan Terkirim 📦!") 
var mon = args.join(' ')
var m1 = mon.split(",")[0]
var m2 = mon.split(",")[1]
var m3 = mon.split(",")[2]
var m4 = mon.split(",")[3]
var m5 = mon.split(",")[4]
let dex1 = m1 + '@s.whatsapp.net'
let rajanye = global.owner + '@s.whatsapp.net'
let gue = m.sender
let ments = [dex1, rajanye, gue]
A17.sendMessage(mq1, {text: `
*📦 PESANAN MU DATANG 📦*
Harga: ${m4}
Username: Root
Password: ${m5}
Ram: ${m3}

*°•——————  TOS VPS  ——————•°*
- Jangan Dipakai Untuk DDoS 
- Jangan Dipakai Untuk Tunneling
- Batas CPU 120%
Melanggar? garansi hangus & no reff! `}, m) 
}
break
case 'restartvps': {
    if (!isCreator) return reply(mess.botowner)
if (!text) return m.reply(`Example : *.${command}* iddroplet`)
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

case 'rebuild': {
    if (!isCreator) return reply(mess.botowner)
if (!text) return m.reply(`Example : *.${command}* iddroplet`)
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
A17.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

case "sisadroplet": {
    if (!isCreator) return reply(mess.botowner)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.token_do}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.token_do}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
    if (!isCreator) return reply(mess.botowner)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

case "deldroplet": {
    if (!isCreator) return reply(mess.botowner)
if (!text) return m.reply(`Example : *.${command}* iddroplet`)
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break
	  
case "r1c1": case "r2c1": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return reply(mess.botowner)
if (!text) return m.reply(`Example : *.${command}* hostname`)
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "syd1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(`Example : *.${command}* hostname`)
    function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

    try {        
        let dropletData = {
            name: hostname,
            region: region,
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        const password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.token_do 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...\nSilahkan Tunggu 2-5 Menit !`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.token_do
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `Sukses Membuat VPS!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await A17.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

      case 'modlist': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner);
        A17.sendMessage(from, { react: { text: "🛡️", key: m.key } })

        try {
          const modData = fs.readFileSync('./database/mod.json', 'utf8');
          const mods = JSON.parse(modData);

          if (mods.length === 0) {
            reply('There are no mods in the list.');
          } else {
            let modList = '';

            mods.forEach((mod, index) => {
              modList += `(${index + 1}) ${A17.getName(mod)}\n`;
            });
			await sleep(2000);
            reply(`List of List of Moderators:\n\n${modList}`);
          }
        } catch (error) {
          console.error(error);
          reply('Failed to fetch mod list.');
        }
	  }
        break;

      case 'setprefix': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        A17.sendMessage(from, { react: { text: "🛡️", key: m.key } })

        if (args.length !== 1) {
          return m.reply(`Please provide a single character as the new prefix.`);
        } else {
          const newPrefix = args[0];
          try {
            global.prefa = process.env.PREFIX ? process.env.PREFIX.split(".") : [newPrefix];
            return m.reply(`${pushname} Successfully changed Prefix to "${newPrefix}"`);
          } catch (error) {
            console.error('Error changing prefix:', error);
            return m.reply(`An error occurred while changing the prefix. Please try again later.`);
          }
        }
	  }
		  break;
		//MENU SHOW AKUN
case 'cekexp': {
    if (!isCreator) return reply(mess.botowner)
    try {
        await A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
        m.reply(`Plz Wait ${pushname}, Show All Akun EXP Today... ⚙️`);

        const cp = require('child_process');
        const { promisify } = require('util');
        const exec = promisify(cp.exec).bind(cp);

        const { stdout, stderr } = await exec('xp-wa');
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    } catch (err) {
        console.error('Error checking service status:', err);
        reply('Oops, terjadi kesalahan saat memeriksa akun expired.');
    }
    break;
}

case 'cekservice': {
    if (!isCreator) return reply(mess.botowner)
    try {
        await A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
        m.reply(`Plz Wait ${pushname}, Show All Status Service... ⚙️`);

        const cp = require('child_process');
        const { promisify } = require('util');
        const exec = promisify(cp.exec).bind(cp);

        const { stdout, stderr } = await exec('run-wa');
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    } catch (err) {
        console.error('Error checking service status:', err);
        reply('Oops, terjadi kesalahan saat memeriksa status service.');
    }
    break;
}

case 'memberssh': {
    if (!isCreator) return reply(mess.botowner)
    try {
        await A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
        m.reply(`Plz Wait ${pushname}, Show All Member SSH... ⚙️`);

        const cp = require('child_process');
        const { promisify } = require('util');
        const exec = promisify(cp.exec).bind(cp);

        const { stdout, stderr } = await exec('member-ssh-wa');
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    } catch (err) {
        console.error('Error showing SSH members:', err);
        reply('Oops, terjadi kesalahan saat menampilkan member SSH.');
    }
    break;
}

      case 'memberxray': {
		if (!isCreator) return reply(mess.botowner)
        await A17.sendMessage(from, { react: { text: "🫡", key: m.key } })

        m.reply(`Plz Wait ${pushname} Show All Member Xray... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        try {
          o = await exec('member-vme-wa')
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;


case 'loginssh': {

    if (!isCreator) return reply(mess.botowner)

    try {
        await A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
        m.reply(`Plz Wait ${pushname}, Show All Member SSH... ⚙️`);

        const cp = require('child_process');
        const { promisify } = require('util');
        const exec = promisify(cp.exec).bind(cp);

        const { stdout, stderr } = await exec('ceklim-wa');
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    } catch (err) {
        console.error('Error showing SSH members:', err);
        reply('Oops, terjadi kesalahan saat menampilkan member SSH.');
    }
    break;
}

case 'loginxray': {
    if (!isCreator) return reply(mess.botowner)
    try {
        await A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
        m.reply(`Plz Wait ${pushname}, Show All Member XRAY... ⚙️`);

        const cp = require('child_process');
        const { promisify } = require('util');
        const exec = promisify(cp.exec).bind(cp);

        const { stdout, stderr } = await exec('cek-vme-wa');
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    } catch (err) {
        console.error('Error showing SSH members:', err);
        reply('Oops, terjadi kesalahan saat menampilkan member SSH.');
    }
    break;
}

case 'addssh': {
    if (!isCreator) return reply(mess.botowner);
    if (!args.join("")) return reply(`MOHON INPUT *NAMA.PASSWORD.LIMITIP.MASAAKTIF*`);
    
    // Parsing input menjadi array berdasarkan delimiter '.'
    const swn = args.join(" ");
    const [pcknm, pckpw, pckip, pckex] = swn.split(".");

    // Validasi jika salah satu input kosong
    if (!pcknm || !pckpw || !pckip || !pckex) {
        return reply(`Mohon pastikan semua data terisi dengan format: *NAMA.PASSWORD.LIMITIP.MASAAKTIF*.

Contoh: *john.doe.2.30*`);
    }

    // Memberikan respon awal kepada pengguna
    A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
    m.reply(`Mohon tunggu ${pushname}, sedang membuat akun SSH... ⚙️`);

    let cp = require('child_process');
    let { promisify } = require('util');
    let exec = promisify(cp.exec).bind(cp);
    let o;

    try {
        // Mengalihkan stderr ke stdout agar warning tidak menjadi output tersendiri
        o = await exec(`printf "%s\n" "${pcknm}" "${pckpw}" "${pckip}" "${pckex}" | add-ssh-wa 2>&1`);
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;
        // Membersihkan output dari pesan warning jika ada
        let cleanOutput = stdout.replace(/.*WARNING:.*/g, '').trim();
        
        // Mengirimkan output utama ke pengguna jika tersedia
        if (cleanOutput) {
            m.reply(cleanOutput);
        } 
    }
}
break;


      case 'delssh': {
		if (!isCreator) return reply(mess.botowner)
        if (!args.join("")) return reply(`MOHON INPUT *NAMA AKUN*`)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Delete Account... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pcknm = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pcknm}" | del-ssh-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;
		
case 'renewssh': 
case 'renewakun': {
    if (!isCreator) return reply(mess.botowner)
    if (!args.join("")) return reply(`MOHON INPUT *NAMA.MASA AKTIF*`);

    // Parsing input menjadi array berdasarkan delimiter '.'
    const swn = args.join(" ");
    const [pcknm, pckex] = swn.split(".");

    // Validasi jika salah satu input kosong
    if (!pcknm || !pckex) {
        return reply(`Mohon pastikan semua data terisi dengan format: *NAMA.MASA AKTIF*.\n\nContoh: *john.30*`);
    }

    // Memproses data jika validasi terpenuhi
    A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
    m.reply(`Mohon tunggu ${pushname}, sedang memperbarui akun SSH... ⚙️`);

    let cp = require('child_process');
    let { promisify } = require('util');
    let exec = promisify(cp.exec).bind(cp);
    let o;

    try {
        o = await exec(`printf "%s\n" "${pcknm}" "${pckex}" | renew-ssh-wa`);
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    }
}
break;
		
      case 'cekssh': {
		if (!isCreator) return reply(mess.botowner)
        if (!args.join("")) return reply(`MOHON INPUT *NAMA*\n\nContoh:\n/cektrojan jhon`)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Cek Detail Account... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pcknm = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pcknm}" | user-ssh-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;
				
      case 'trialssh': case 'trialakun': {
        if (!isCreator) return reply(mess.botowner)
        if (!args.join("")) return reply(`MOHON INPUT *MENIT*`)
		A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Create Account Trial... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pckex = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pckex}" | trial-ssh-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;
		//ADD XRAY
case 'addvmess': {
    if (!isCreator) return reply(mess.botowner);
    if (!args.join("")) return reply(`MOHON INPUT *NAMA.LIMITBW.LIMITIP.MASAAKTIF*`);
    
    const swn = args.join(" ");
    const [pcknm, pckpw, pckip, pckex] = swn.split(".");

    if (!pcknm || !pckpw || !pckip || !pckex) {
        return reply(`Mohon pastikan semua data terisi dengan format: *NAMA.LIMITBW.LIMITIP.MASAAKTIF*.

Contoh: *john.50.2.30*`);
    }

    A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
    m.reply(`Mohon tunggu ${pushname}, sedang membuat akun Vmess... ⚙️`);

    let cp = require('child_process');
    let { promisify } = require('util');
    let exec = promisify(cp.exec).bind(cp);
    let o;

    try {
        o = await exec(`printf "%s\n" "${pcknm}" "${pckpw}" "${pckip}" "${pckex}" | add-vme-wa 2>&1`);
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;
        let cleanOutput = stdout.replace(/.*WARNING:.*/g, '').trim();
        if (cleanOutput) {
            m.reply(cleanOutput);
        } 
    }
}
break;

case 'addvless': {
    if (!isCreator) return reply(mess.botowner);
    if (!args.join("")) return reply(`MOHON INPUT *NAMA.LIMITBW.LIMITIP.MASAAKTIF*`);
    
    const swn = args.join(" ");
    const [pcknm, pckpw, pckip, pckex] = swn.split(".");

    if (!pcknm || !pckpw || !pckip || !pckex) {
        return reply(`Mohon pastikan semua data terisi dengan format: *NAMA.LIMITBW.LIMITIP.MASAAKTIF*.

Contoh: *john.50.2.30*`);
    }

    A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
    m.reply(`Mohon tunggu ${pushname}, sedang membuat akun Vless... ⚙️`);

    let cp = require('child_process');
    let { promisify } = require('util');
    let exec = promisify(cp.exec).bind(cp);
    let o;

    try {
        o = await exec(`printf "%s\n" "${pcknm}" "${pckpw}" "${pckip}" "${pckex}" | add-vle-wa 2>&1`);
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;
        let cleanOutput = stdout.replace(/.*WARNING:.*/g, '').trim();
        if (cleanOutput) {
            m.reply(cleanOutput);
        } 
    }
}
break;

case 'addtrojan': {
    if (!isCreator) return reply(mess.botowner);
    if (!args.join("")) return reply(`MOHON INPUT *NAMA.LIMITBW.LIMITIP.MASAAKTIF*`);
    
    const swn = args.join(" ");
    const [pcknm, pckpw, pckip, pckex] = swn.split(".");

    if (!pcknm || !pckpw || !pckip || !pckex) {
        return reply(`Mohon pastikan semua data terisi dengan format: *NAMA.LIMITBW.LIMITIP.MASAAKTIF*.

Contoh: *john.50.2.30*`);
    }

    A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
    m.reply(`Mohon tunggu ${pushname}, sedang membuat akun Trojan... ⚙️`);

    let cp = require('child_process');
    let { promisify } = require('util');
    let exec = promisify(cp.exec).bind(cp);
    let o;

    try {
        o = await exec(`printf "%s\n" "${pcknm}" "${pckpw}" "${pckip}" "${pckex}" | add-tro-wa 2>&1`);
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;
        let cleanOutput = stdout.replace(/.*WARNING:.*/g, '').trim();
        if (cleanOutput) {
            m.reply(cleanOutput);
        } 
    }
}
break;
		
		//RENEW XRAY		
case 'renewvmess': {
    if (!isCreator) return reply(mess.botowner)
    if (!args.join("")) return reply(`MOHON INPUT *NAMA.LIMITBW.LIMITIP.MASAAKTIF*`);

    const swn = args.join(" ");
    const [pcknm, pckpw, pckip, pckex] = swn.split(".");

    // Validasi input
    if (!pcknm || !pckpw || !pckip || !pckex) {
        return reply(`Mohon pastikan semua data terisi dengan format: *NAMA.LIMITBW.LIMITIP.MASAAKTIF*.\n\nContoh: *john.50.2.30*`);
    }

    A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
    m.reply(`Mohon tunggu ${pushname}, sedang memperbarui akun Vmess... ⚙️`);

    let cp = require('child_process');
    let { promisify } = require('util');
    let exec = promisify(cp.exec).bind(cp);
    let o;

    try {
        o = await exec(`printf "%s\n" "${pcknm}" "${pckpw}" "${pckip}" "${pckex}" | renew-vme-wa`);
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    }
}
break;

case 'renewvless': {
    if (!isCreator) return reply(mess.botowner)
    if (!args.join("")) return reply(`MOHON INPUT *NAMA.LIMITBW.LIMITIP.MASAAKTIF*`);

    const swn = args.join(" ");
    const [pcknm, pckpw, pckip, pckex] = swn.split(".");

    // Validasi input
    if (!pcknm || !pckpw || !pckip || !pckex) {
        return reply(`Mohon pastikan semua data terisi dengan format: *NAMA.LIMITBW.LIMITIP.MASAAKTIF*.\n\nContoh: *john.50.2.30*`);
    }

    A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
    m.reply(`Mohon tunggu ${pushname}, sedang memperbarui akun Vless... ⚙️`);

    let cp = require('child_process');
    let { promisify } = require('util');
    let exec = promisify(cp.exec).bind(cp);
    let o;

    try {
        o = await exec(`printf "%s\n" "${pcknm}" "${pckpw}" "${pckip}" "${pckex}" | renew-vle-wa`);
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    }
}
break;

case 'renewtrojan': {
    if (!isCreator) return reply(mess.botowner)
    if (!args.join("")) return reply(`MOHON INPUT *NAMA.LIMITBW.LIMITIP.MASAAKTIF*`);

    const swn = args.join(" ");
    const [pcknm, pckpw, pckip, pckex] = swn.split(".");

    // Validasi input
    if (!pcknm || !pckpw || !pckip || !pckex) {
        return reply(`Mohon pastikan semua data terisi dengan format: *NAMA.LIMITBW.LIMITIP.MASAAKTIF*.\n\nContoh: *john.50.2.30*`);
    }

    A17.sendMessage(from, { react: { text: "🫡", key: m.key } });
    m.reply(`Mohon tunggu ${pushname}, sedang memperbarui akun Trojan... ⚙️`);

    let cp = require('child_process');
    let { promisify } = require('util');
    let exec = promisify(cp.exec).bind(cp);
    let o;

    try {
        o = await exec(`printf "%s\n" "${pcknm}" "${pckpw}" "${pckip}" "${pckex}" | renew-tro-wa`);
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    }
}
break;

			//TRIAL XRAY
      case 'trialvmess': {
        if (!isCreator) return reply(mess.botowner)
        if (!args.join("")) return reply(`MOHON INPUT *MENIT*`)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Create Account Trial Vmess... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pcknm = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pcknm}" | trial-vme-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;

	  case 'trialvless': {
        if (!isCreator) return reply(mess.botowner)
        if (!args.join("")) return reply(`MOHON INPUT *MENIT*`)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Create Account Trial Vless... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pcknm = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pcknm}" | trial-vle-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;
		
	  case 'trialtrojan': {
        if (!isCreator) return reply(mess.botowner)
        if (!args.join("")) return reply(`MOHON INPUT *MENIT*`)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Create Account Trial Trojan... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pcknm = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pcknm}" | trial-tro-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;
		
		//DELETE XRAY
      case 'delvmess': {
        if (!isCreator) return reply(mess.botowner)
        if (!args.join("")) return reply(`MOHON INPUT *NAMA*\n\nContoh:\n/cektrojan jhon`)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Delete Account Vmess... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pcknm = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pcknm}" | del-vme-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;
		
      case 'delvless': {
        if (!isCreator) return reply(mess.botowner)
        if (!args.join("")) return reply(`MOHON INPUT *NAMA*\n\nContoh:\n/cektrojan jhon`)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Delete Account Vless... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pcknm = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pcknm}" | del-vle-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;
		
      case 'deltrojan': {
        if (!isCreator) return reply(mess.botowner)
        if (!args.join("")) return reply(`MOHON INPUT *NAMA*\n\nContoh:\n/cektrojan jhon`)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Delete Account Trojan... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pcknm = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pcknm}" | del-tro-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;
		
		//CEK DETAIL XRAY
      case 'cekvmess': {
        if (!isCreator) return reply(mess.botowner)
        if (!args.join("")) return reply(`MOHON INPUT *NAMA*\n\nContoh:\n/cektrojan jhon`)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Detail Account Vmess... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pcknm = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pcknm}" | user-vme-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;
		
      case 'cekvless': {
        if (!isCreator) return reply(mess.botowner)
        if (!args.join("")) return reply(`MOHON INPUT *NAMA*\n\nContoh:\n/cektrojan jhon`)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Detail Account Vless... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pcknm = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pcknm}" | user-vle-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;
		
      case 'cektrojan': {
        if (!isCreator) return reply(mess.botowner)
		if (!args.join("")) return reply(`MOHON INPUT *NAMA*\n\nContoh:\n/cektrojan jhon`)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        m.reply(`Plz Wait ${pushname} Detail Account Trojan... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        const swn = args.join(" ")
        const pcknm = swn.split(".")[0];
        try {
          o = await exec(`printf "%s\n" "${pcknm}" | user-tro-wa`)
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;
		
		//MENU Panel server
      case 'menuserver': case 'panelserver': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        try {
          await A17.sendMessage(from, { react: { text: "✨", key: m.key } });


          const helpexitText = `\nHello ${pushname} Dear...!! ${nowtime} ,
          
          
             ⌯  Date : ${kaidate}
          
          
            〢━ 〄 Bot Info 〄 ━〢
          
   ⌯  My prefix is :  ${prefix}
   ⌯  Bot usr name : ${pushname} 
   ⌯  Owner name : ${global.OwnerName} 
   ⌯  Runtime : ${runtime(process.uptime())} 
   ⌯  RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
   ⌯  Total CPU Usage: ${totalCpuUsage}%
   ⌯  Platform : Linux

┏ ┅ ━━〔〄 *MENU CREATE AKUN* 〄 〕━ ┅ 
┃
┃   ⌯     ${prefix}addssh
┃   ⌯     ${prefix}trialssh
┃   ⌯     ${prefix}addvmess
┃   ⌯     ${prefix}trialvmess
┃   ⌯     ${prefix}addvless
┃   ⌯     ${prefix}trialvless
┃   ⌯     ${prefix}addtrojan
┃   ⌯     ${prefix}trialtrojan
┃
┏ ┅ ━━〔〄 *MENU DELETE AKUN* 〄 〕━ ┅ 
┃
┃   ⌯     ${prefix}delssh
┃   ⌯     ${prefix}delvmess
┃   ⌯     ${prefix}delvless
┃   ⌯     ${prefix}deltrojan
┃
┏ ┅ ━━〔〄 *MENU RENEW AKUN* 〄 〕━ ┅ 
┃
┃   ⌯     ${prefix}renewssh
┃   ⌯     ${prefix}renewvmess
┃   ⌯     ${prefix}renewvless
┃   ⌯     ${prefix}renewtrojan
┃
┏ ┅ ━━〔〄 *MENU DETAIL AKUN* 〄 〕━ ┅ 
┃
┃   ⌯     ${prefix}cekssh
┃   ⌯     ${prefix}cekvmess
┃   ⌯     ${prefix}cekvless
┃   ⌯     ${prefix}cektrojan
┃
┏ ┅ ━━〔〄 *MENU OTHER* 〄 〕━ ┅ 
┃
┃   ⌯     ${prefix}memberssh
┃   ⌯     ${prefix}memberxray
┃   ⌯     ${prefix}loginssh
┃   ⌯     ${prefix}loginxray
┃   ⌯     ${prefix}cekservice
┃   ⌯     ${prefix}cekexp
┃
┗ ┅ ━━━━━━━━━━━ ┅ ━★᭄ꦿ᭄ꦿ

┏ ┅ ━〔 ⚠️ *THX TO..* ⚠️ ━━━〢
┃⌯ALLAH SWT
┃⌯${global.BotName}
┃⌯MY BROTHER :)
┗ ┅ ━━━━━━━━━━━ ┅ ━★᭄ꦿ᭄ꦿ`

A17.sendMessage(m.chat, {
            text: helpexitText,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: BotName,
                    body: `Follow Saluran Kami`,
                    thumbnailUrl: 'https://telegra.ph/file/a9398dd23261b48b5b5c2.jpg',
                    sourceUrl: global.website,
                    mediaType: 1,
                    renderMediumThumbnail: true
                }
            }
        });
    } catch (err) {
        console.error('Error sending help menu:', err);
        reply('Oops, terjadi kesalahan saat mengirim menu bantuan.');
    }
    break;
}
          		
case 'status':
case 'post': {
    if (!isCreator) return reply(mess.owner);
    if (!quoted) return reply(`📎 Kirim/reply gambar atau video dengan caption ${prefix}status`);

    const quotedMsg = m.quoted || m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const mime = quotedMsg?.mimetype || '';

    // Cek apakah itu video
    if (/video/.test(mime)) {
        if ((quotedMsg.msg || quotedMsg).seconds > 30) {
            return reply('❌ Maksimal durasi video adalah 30 detik!');
        }
    }

    // Cek apakah itu gambar
    if (/image/.test(mime)) {
        if (quotedMsg?.fileLength > 10 * 1024 * 1024) {  // 10MB max image size
            return reply('❌ Gambar terlalu besar! Maksimal ukuran gambar 10MB.');
        }
    }

    try {
        // Kirim pesan bahwa proses upload dimulai
        await reply('⏳ Uploading media ke status, mohon tunggu...');

        const mediaBuffer = await A17.downloadMediaMessage(quotedMsg, 'buffer', {}, { reuploadRequest: A17.updateMediaMessage });

        if (!mediaBuffer) {
            return reply('❌ Gagal mendownload media.');
        }

        // Cek ukuran file
        const maxSizeMB = 10;
        const fileSizeMB = mediaBuffer.length / (1024 * 1024);
        if (fileSizeMB > maxSizeMB) {
            return reply(`❌ Ukuran file terlalu besar (${fileSizeMB.toFixed(2)} MB). Maksimal ${maxSizeMB} MB!`);
        }

        const captionText = quotedMsg.message?.caption || '';

        if (/image/.test(mime)) {
            await A17.sendMessage('status@broadcast', { image: mediaBuffer, caption: captionText });
            reply(`✨ ${pushname}, berhasil memposting gambar ke status! ✨`);
        } else if (/video/.test(mime)) {
            await A17.sendMessage('status@broadcast', { video: mediaBuffer, caption: captionText });
            reply(`✨ ${pushname}, berhasil memposting video ke status! ✨`);
        } else {
            reply('❌ Tipe pesan tidak didukung. Hanya gambar atau video.');
        }
    } catch (err) {
        console.error('❌ Error saat upload status:', err);
        reply('❌ Terjadi kesalahan saat mengupload ke status.');
    }
}
break;




      case 'banchat': case 'bangroup': case 'banmode': {
        if (isBan) return reply(mess.banned);
        if (!isCreator) return reply(mess.botowner);
        A17.sendMessage(from, { react: { text: "⚠️", key: m.key } })

        if (args[0] === "on") {
          if (isBanChat) return reply('This Group is Already Banned from using me!');
          banchat.push(from);
          reply('This Group has been banned from using me!');

          var groupe = await A17.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });

          A17.sendMessage(from, { text: `\`\`\`「 Notice 」\`\`\`\n\nThis group is banned from using the bot. So, here nobody can use me anymore!`, contextInfo: { mentionedJid: mems } }, { quoted: m });
        } else if (args[0] === "off") {
          if (!isBanChat) return reply('This Group is Already Banned from using me!');
          let off = banchat.indexOf(from);
          banchat.splice(off, 1);
          reply('This Group has been *unbanned* from using me!');
        } else {
          reply('Please choose either *"on"* or *"off"* to ban or unban the group from using the bot.');
        }
      }
        break;


      case 'setname': case 'setsubject': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!text) return reply('Pls enter -setname <New Group Name>  to change this Group Name')
        await A17.groupUpdateSubject(m.chat, text).then((res) => reply(mess.jobdone)).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'block': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await A17.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'unblock': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await A17.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'setdesc': case 'setdesk': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!text) return reply('Pls enter -setname <New Group Description>  to change this Group Description.')
        await A17.groupUpdateDescription(m.chat, text).then((res) => reply(mess.jobdone)).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!quoted) return reply(`Send/reply Image With Caption ${prefix + command}`)
        if (!/image/.test(mime)) return reply(`Send/reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
        if (/webp/.test(mime)) return reply(`Send/reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
        let media = await A17.downloadAndSaveMediaMessage(quoted)
        await A17.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
        reply(mess.jobdone)
      }
        break;

      case 'hidetag': case 'tag': case 'ping': case 'tagall': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        A17.sendMessage(from, { react: { text: "✨", key: m.key } })
        A17.sendMessage(m.chat, { text: args.join(" ") ? args.join(" ") : '', mentions: participants.map(a => a.id) }, { quoted: m })
      }
        break;


      case 'tagadmins': case 'admins': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        A17.sendMessage(from, { react: { text: "🗿", key: m.key } })
        if (!text) return reply(`*Please quote or write a meaningful message to tag admins to*`)
        let teks = `*「 Tag Admins 」*

*Message : ${text}*\n\n`
        for (let mem of groupAdmins) {
          teks += `🍁 @${mem.split('@')[0]}\n`
        }
        A17.sendMessage(m.chat, { text: teks, mentions: groupAdmins }, { quoted: m })
      }
        break;

      case 'purge': {
        mess
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        const delay = time => new Promise(res => setTimeout(res, time));
        let mentioned = participants.map(v => v.jid)
        for (let member of mentioned) {
          A17.groupParticipantsUpdate(m.chat, [member], 'remove')
        }
      }

        break;


      case 'nowa': case 'find': case 'stalk': case 'stalknumber': {
        if (isBan) return reply(mess.banned);
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!args[0]) return reply(`Use command like: ${prefix}stalk <number>xxx`)
        var inputnumber = args[0]
        if (!inputnumber.includes('x')) return reply('You didnot added x')
        reply(`Searching for WhatsApp account in given range...`)
        reply(`Please wait while i fetch details...`)
        function countInstances(string, word) {
          return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
          randomxx = 10
        } else if (random_length == 2) {
          randomxx = 100
        } else if (random_length == 3) {
          randomxx = 1000
        }
        var nomerny = `*『 List of Whatsapp Numbers 』*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within the range you provided*\n`
        for (let i = 0; i < randomxx; i++) {
          var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
          var status1 = nu[Math.floor(Math.random() * nu.length)]
          var status2 = nu[Math.floor(Math.random() * nu.length)]
          var status3 = nu[Math.floor(Math.random() * nu.length)]
          var dom4 = nu[Math.floor(Math.random() * nu.length)]
          var rndm;
          if (random_length == 1) {
            rndm = `${status1}`
          } else if (random_length == 2) {
            rndm = `${status1}${status2}`
          } else if (random_length == 3) {
            rndm = `${status1}${status2}${status3}`
          } else if (random_length == 4) {
            rndm = `${status1}${status2}${status3}${dom4}`
          }
          var anu = await A17.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
          var anuu = anu.length !== 0 ? anu : false
          try {
            try {
              var anu1 = await A17.fetchStatus(anu[0].jid)
            } catch {
              var anu1 = '401'
            }
            if (anu1 == '401' || anu1.status.length == 0) {
              nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
            } else {
              nomerny += `🪄 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n🔹 *Bio :* ${anu1.status}\n🔸 *Updated On :* ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
            }
          } catch {
            nowhatsapp += `${number0}${i}${number1}\n`
          }
        }
        reply(`${nomerny}${nobio}${nowhatsapp}`)
      }
        break;


      case 'grouplink': case 'gclink': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        A17.sendMessage(from, { react: { text: "🪄", key: m.key } })
        let response = await A17.groupInviteCode(m.chat)
        A17.sendMessage(m.chat, {
          text: `*Group Name:* *${groupMetadata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
            "forwardingScore": 1000000000,
            isForwarded: true,
          }
        }, { quoted: m, detectLink: true })
      }
        break;


      case 'resetlinkgc':
      case 'resetlinkgroup':
      case 'resetlinkgrup':
      case 'revoke':
      case 'resetlink':
      case 'resetgrouplink':
      case 'resetgclink':
      case 'resetgruplink': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        A17.groupRevokeInvite(m.chat)
      }
        break;


      case 'gc': case 'grup': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (args[0] === 'close') {
          await A17.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Group has been closed!`)).catch((err) => reply(jsonformat(err)))
        } else if (args[0] === 'open') {
          await A17.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Group has been opened!`)).catch((err) => reply(jsonformat(err)))
        } else {

          let buttonMessage = {
            image: BotLogo,
            jpegThumbnail: Thumb,
            caption: `*「 ${global.BotName} 」*\n\n_Group Setting Changer tool_:\n\nIf you want to Group close *-group close*\n\nIf you want to Group Oepn *-group open*`,
            footer: `${BotName}`,
            headerType: 4
          }
          A17.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
      }
        break;


      case 'promote': case 'admin': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await A17.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'demote': case 'unadmin': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await A17.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'add': {
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isCreator) return reply(mess.botowner)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })


        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (users.length == 0) return reply(`Please write the number of the person you want to add to thhis group`)
        await A17.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(`User Added Successfully!`)).catch((err) => reply(`Cannot add that user to this group!`))
      }
        break;


      case 'invite': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })

        if (!text) return reply(`Enter the number you want to invite to the group...\n\nExample :\n*${prefix + command}* 916297175943`)
        if (text.includes('+')) return reply(`Enter the number together without *+*`)
        if (isNaN(text)) return reply(`Enter only the numbers plus your country code without spaces`)
        let group = m.chat
        let link = 'https://chat.whatsapp.com/' + await A17.groupInviteCode(group)
        await A17.sendMessage(text + '@s.whatsapp.net', { text: ` *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender] })
        reply(` An invite link is sent to the user`)
      }
        break;


      case 'remove': case 'sepak': case 'terjang': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await A17.groupParticipantsUpdate(m.chat, [users], 'remove')
      }
        break;



case "joinall":{
  if (args[0] === "on") {
    global.joinall = true;
    updateConfig("joinall", "JOINALL", true); // Mengupdate file config.js dengan nilai true
    reply("✅ JoinAll telah diaktifkan!");
  } else if (args[0] === "off") {
    global.joinall = false;
    updateConfig("joinall", "JOINALL", false); // Mengupdate file config.js dengan nilai false
    reply("✅ JoinAll telah dinonaktifkan!");
  } else {
    reply("❌ Perintah tidak dikenali. Gunakan 'on' untuk mengaktifkan atau 'off' untuk menonaktifkan.");
  }
}
  break;
      case 'join': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!args[0]) return reply(`Where's the link?`)
        vdd = args[0]
        let vcc = vdd.split("https://chat.whatsapp.com/")[1]
        if (!vcc) return reply("Link invalid!")
        if (isCreator) {
          await A17.groupAcceptInvite(vcc).then(async (res) => reply(jsonformat(res))).catch(_ => _)
          reply("Succes!")
        } else {
          A17.query({
            tag: "iq",
            attrs: {
              type: "get",
              xmlns: "w:g2",
              to: "@g.us"
            },
            content: [{ tag: "invite", attrs: { code: vcc } }]
          }).then(async (res) => {
            sizny = res.content[0].attrs.size
            if (sizny < 20) {
              teks = `Sorry, munimun 20 members are required in a group to add bot!`
              sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "916297175943@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
            } else if (sizny > 20) {
              await A17.groupAcceptInvite(vcc).then(async (res) => reply(jsonformat(res))).catch(_ => _)
              reply("Joined !")
            } else {
              reply("Error")
            }
          }).catch(_ => _)
        }
      }
        break;

      case 'bye': {

        if (!isAdmins && !isCreator) return reply(mess.useradmin);

        await sleep(1500);

        await A17.sendMessage(m.chat, { text: args.join(" ") ? args.join(" ") : `Okee ${global.OwnerName} Leaving the group...`, mentions: participants.map(a => a.id) });

        // Leave the group
        A17.sendMessage(from, { react: { text: "☯️", key: m.key } });
        await A17.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)));

        break;
      }
	  
case 'byeall': {

  // Memeriksa apakah pengguna adalah pembuat bot
  if (!isCreator) return reply('Perintah ini hanya dapat digunakan oleh pembuat bot.');

  try {
    // Mendapatkan daftar semua grup yang diikuti oleh bot
    const allGroups = await A17.groupFetchAllParticipating();
    
    // Iterasi melalui setiap grup dan keluar
    for (let groupId in allGroups) {
      await A17.groupLeave(groupId);
      console.log(`Berhasil keluar dari grup: ${allGroups[groupId].subject}`);
    }
    
    reply('Bot telah berhasil keluar dari semua grup.');

  } catch (error) {
    console.error('Terjadi kesalahan saat keluar dari grup:', error);
    reply('Terjadi kesalahan saat mencoba keluar dari grup.');
  }

  break;
}


      //
case 'welcome':
case 'group-event': {
  A17.sendMessage(from, { react: { text: '❤', key: m.key } });
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!m.isGroup) return reply(mess.grouponly);
  if (!isAdmins && !isCreator) return reply(mess.useradmin);

  const { getGroup, updateGroup } = require('./src/groups.js'); // Impor fungsi dari groups.js

  // Ambil data grup dari database
  const groupData = getGroup(from) || { welcome: false };

  if (args.length === 0) {
    const status = groupData.welcome ? '*aktif*' : '*nonaktif*';
    return m.reply(`Fitur welcome saat ini ${status} di grup ini.\n\nKamu bisa mengubahnya dengan perintah "${global.prefa[0]}welcome on/off".`);
  }

  if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
    const status = args[0];

    if (status === 'on') {
      // Jika fitur welcome sudah aktif
      if (groupData.welcome) {
        return m.reply(`Fitur welcome sudah *aktif* di grup ini.`);
      } else {
        // Perbarui data grup untuk mengaktifkan fitur welcome
        updateGroup(from, { welcome: true });
        return m.reply(`Fitur welcome sekarang *aktif* di grup ini.`);
      }
    } else if (status === 'off') {
      // Jika fitur welcome sudah nonaktif
      if (!groupData.welcome) {
        return m.reply(`Fitur welcome sudah *nonaktif* di grup ini.`);
      } else {
        // Perbarui data grup untuk menonaktifkan fitur welcome
        updateGroup(from, { welcome: false });
        return m.reply(`Fitur welcome sekarang *nonaktif* di grup ini.`);
      }
    }
  } else {
    return m.reply(`Penggunaan: ${global.prefa[0]}welcome [on/off]`);
  }
}
  break;




      //
      case 'ban': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })

        if (!args[0]) return reply(`Select add or del (add to ban, del to unban), For Example: reply *${prefix}ban add* to the user you want to ban.`)
        if (args[1]) {
          orgnye = args[1] + "@s.whatsapp.net"
        } else if (m.quoted) {
          orgnye = m.quoted.sender
        }
        const isBane = banUser.includes(orgnye)
        if (args[0] === "add") {
          if (isBane) return ads('User was already banned.')
          banUser.push(orgnye)
          reply(`Successfully banned the user`)
        } else if (args[0] === "del") {
          if (!isBane) return ads('User was already unbanned.')
          let delbans = banUser.indexOf(orgnye)
          banUser.splice(delbans, 1)
          reply(`Successfully unbanned the user.`)
        } else {
          reply("Error")
        }
      }
        break;


case 'antilink': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!m.isGroup) return reply(mess.grouponly);
  if (!isBotAdmins) return reply(mess.botadmin);
  if (!isAdmins && !isCreator) return reply(mess.useradmin);

  const groupDbPath = path.join(__dirname, './database/group.json');
  const antilinkLogPath = path.join(__dirname, './database/antilinklog.json');

  const groupData = fs.existsSync(groupDbPath)
    ? JSON.parse(fs.readFileSync(groupDbPath, 'utf8'))
    : {};
  const logData = fs.existsSync(antilinkLogPath)
    ? JSON.parse(fs.readFileSync(antilinkLogPath, 'utf8'))
    : {};

  const initSetting = {
    yt: false,
    wa: false,
    tele: false,
    tiktok: false,
    twitter: false,
    ig: false,
    fb: false,
    unknown: false
  };

  if (!groupData[m.chat]) groupData[m.chat] = {};
  if (!groupData[m.chat].antilink) groupData[m.chat].antilink = { ...initSetting };

  const argsKey = (args[0] || '').toLowerCase();

  if (!argsKey || (args.length < 2 && argsKey !== 'all')) {
    let statusList = Object.entries(groupData[m.chat].antilink)
      .map(([key, val]) => `- *${key}* : ${val ? '✅ Aktif' : '❌ Mati'}`)
      .join("\n");

    return reply(`Pengaturan AntiLink saat ini:\n${statusList}\n\nContoh perintah:\n- ${prefix}antilink yt on\n- ${prefix}antilink all off`);
  }

  const type = args[0].toLowerCase();
  const value = args[1]?.toLowerCase();

  if (type === 'all') {
    const isTurnedOff = value === 'off';
    Object.keys(groupData[m.chat].antilink).forEach(k => groupData[m.chat].antilink[k] = !isTurnedOff ? true : false);
    reply(`✅ Semua jenis link telah di-${isTurnedOff ? 'nonaktifkan' : 'aktifkan'}`);

    if (isTurnedOff && logData[m.chat]) {
      delete logData[m.chat];
      fs.writeFileSync(antilinkLogPath, JSON.stringify(logData, null, 2));
      console.log(`🗑️ Semua pelanggaran dihapus dari grup ${m.chat}`);
    }

  } else if (type in groupData[m.chat].antilink) {
    groupData[m.chat].antilink[type] = value === 'on';
    reply(`✅ Anti link untuk *${type}* telah di-${value === 'on' ? 'aktifkan' : 'nonaktifkan'}`);
  } else {
    return reply(`❌ Jenis link tidak dikenali. Jenis yang tersedia:\n${Object.keys(initSetting).join(', ')}`);
  }

  fs.writeFileSync(groupDbPath, JSON.stringify(groupData, null, 2));
  break;
}

      case 'toimage': case 'makeimg': case 'toimg': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "🪄", key: m.key } })
        if (!m.quoted) return reply('reply Image')
        if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
        reply(mess.waiting)
        let media = await A17.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) throw err
          let buffer = fs.readFileSync(ran)
          A17.sendMessage(m.chat, { image: buffer }, { quoted: m })
          fs.unlinkSync(ran)
        })
      }
        break;


      case 'tomp4': case 'makemp4': case 'makevideo': case 'tovideo': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "🪄", key: m.key } })
        if (!m.quoted) return reply('reply Image')
        if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
        reply(mess.waiting)
        let { webp2mp4File } = require('./lib/uploader')
        let media = await A17.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await A17.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Here it is...' } }, { quoted: m })
        await fs.unlinkSync(media)
      }
        break;


      case 'toaud': case 'makeaudio': case 'toaudio': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "⌛", key: m.key } })

        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
        if (!m.quoted) return reply(`Send/reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
        reply(mess.waiting)
        let media = await quoted.download()
        let { toAudio } = require('./lib/converter')
        let audio = await toAudio(media, 'mp4')
        A17.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m })
      }
        break;


      case 'tomp3': case 'makemp3': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (/document/.test(mime)) return reply(`Send/reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
        if (!m.quoted) return reply(`Send/reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
        reply(mess.waiting)
        let media = await quoted.download()
        let { toAudio } = require('./lib/converter')
        let audio = await toAudio(media, 'mp4')
        A17.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${global.BotName} (${m.id}).mp3` }, { quoted: m })
      }
        break;


      case 'togif': case 'makegif': case 'getgif': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!m.quoted) return reply('reply Image')
        if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
        reply(mess.wait)
        let { webp2mp4File } = require('./lib/uploader')
        let media = await A17.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await A17.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
        await fs.unlinkSync(media)
      }
        break;

case 'tolink': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
   // if (!isCreator) return reply(mess.botowner);

    const quotedMsg = m.quoted || m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const mime = (quotedMsg?.mimetype || "") || m.mimetype || "";

    if (!/image/.test(mime)) return reply('❌ Balas atau tag pesan *gambar* untuk di-upload ke Catbox.moe.');

    let media;
    try {
        media = await A17.downloadMediaMessage(quotedMsg ? m.quoted : m.message, 'buffer');
    } catch (err) {
        console.error('❌ Gagal mendownload media:', err);
        return reply('❌ Gagal mendownload gambar.');
    }

    const tempFolderPath = './tmp';
    if (!fs.existsSync(tempFolderPath)) {
        fs.mkdirSync(tempFolderPath);
    }

    const originalPath = './tmp/originalImage.jpg';
    const compressedPath = './tmp/compressedImage.jpg';

    fs.writeFileSync(originalPath, media);

    try {
        // Compress gambar menggunakan sharp
        await sharp(originalPath)
            .resize({ width: 1080 }) // Resize jika lebih besar dari 1080px
            .jpeg({ quality: 75 })   // Turunkan kualitas ke 75%
            .toFile(compressedPath);

        const form = new FormData();
        form.append('fileToUpload', fs.createReadStream(compressedPath));
        form.append('reqtype', 'fileupload');

        const response = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: {
                ...form.getHeaders(),
            }
        });

        if (response.data && typeof response.data === 'string' && response.data.startsWith('https://')) {
            reply(`✅ Gambar berhasil di-upload ke Catbox!\nLink: ${response.data}`);
        } else {
            reply('❌ Gagal upload ke Catbox.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat upload ke Catbox.');
    }
    fs.unlinkSync(originalPath);
    fs.unlinkSync(compressedPath);
    break;
}


      case 'translate': case 'ts': case 'trans': {
        if (isBan) return reply(mess.banned);
        A17.sendMessage(from, { react: { text: "⌛", key: m.key } })

        if (!args.join(" ")) return reply("Pls enter any text to translate")
        tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
        Infoo = tes.info
        Detek = tes.translate
        reply(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
      }
        break;

      case 'gimage':
      case 'gig':
      case 'googleimage': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "⌛", key: m.key } });

        if (!args[0]) return reply("Enter a search term to get Google Image!");
        let gis = require('g-i-s');
        gis(args.join(" "), async (error, result) => {
          if (error) {
            console.error(error);
            return reply("Error occurred while searching for images.");
          }

          if (!result || result.length === 0) {
            return reply("No images found for the given search term.");
          }

          n = result;
          images = n[Math.floor(Math.random() * n.length)].url;
          let buttonMessage = {
            image: { url: images },
            caption: `「 _Google Image Search_ 」\n\n_Search Term_ : ${text}\n_Media Url_ : ${images}`,
            footer: `${global.BotName}`,
            headerType: 4,
          };
          A17.sendMessage(m.chat, buttonMessage, { quoted: m });
        });
      }
        break;
		
      case 'google': case 'search': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "✨", key: m.key } })

        if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} anything...`)
        let google = require('google-it')
        google({ 'query': args.join(" ") }).then(res => {
          let teks = `「 *Google Search Engine* 」\n\n*Search term:* ${text}\n\n\n`
          for (let g of res) {
            teks += `*Title* : ${g.title}\n\n`
            teks += `*Description* : ${g.snippet}\n\n`
            teks += `*Link* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
          }
          reply(teks)
        })
      }
        break;


      case "tts": case "texttospeech": case "say": case "speak": {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "⌛", key: m.key } })

        if (!args[0]) return reply("Please give me a text so that i can speak it!")

        let texttosay = text
          ? text
          : m.quoted && m.quoted.text
            ? m.quoted.text
            : m.text;
        const SpeakEngine = require("google-tts-api");
        const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, { lang: "en", slow: false, host: "https://translate.google.com", });
        A17.sendMessage(m.chat, { audio: { url: texttospeechurl, }, mimetype: "audio/mpeg", fileName: `A17SpeechEngine.mp3`, }, { quoted: m, });
      }
        break;


      case 'wiki': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "⌛", key: m.key } })

        if (args.length < 1) return reply('What Are You Looking For?? ')
        const res2 = await wikiSearch(q).catch(e => {
          return reply('Error Result Not Found!')
        })
        const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
        A17.sendMessage(from, { image: { url: res2[0].thumb }, caption: result2 })
	  }       
	   break;

      case 'igdl':
      case 'instagram':
      case 'instagramreels':
      case 'igreels':

        {
          if (isBan) {
            return reply(mess.banned);
          }

          if (isBanChat) {
            return reply(mess.bangc);
          }

          // Send a reaction emoji
          A17.sendMessage(from, { react: { text: "🪄", key: m.key } });

          // Check if a link is provided
          if (!text) {
            return reply(`Where is the link?\n\nExample: ${prefix + command} https://www.instagram.com/reel/Ctjt0srIQFg/?igshid=MzRlODBiNWFlZA==`);
          }

          try {
            // Download the Instagram video
            let instadownload = await instadl(text);

            // Send the downloaded video as a reply to the command
            await A17.sendMessage(m.chat, { video: { url: instadownload.url[0].url }, caption: mess.jobdone }, { quoted: m });
          } catch (error) {
            console.error('Error while processing Instagram video:', error);
            return reply('An error occurred while processing the Instagram video.');
          }
        }
        break;

      case 'ig': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (args[0] === "mp4") {
          A17.sendMessage(from, { video: { url: args[1] }, caption: 'Here it is...', mimetype: 'video/mp4' }, { quoted: m })
        } else if (args[0] === "jpg") {
          A17.sendMessage(from, { image: { url: args[1] }, caption: 'Here it is...' }, { quoted: m })
        } else {
          reply("Error! ")
        }
      }
        break;


      case 'mp4': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args[0]) return reply(`Pls provide link!`)
        try {
          A17.sendMessage(from, {
            video: { url: args[0] }, caption: "Succes!", contextInfo: {
              externalAdreply: {
                title: `${global.BotName}`,
                body: `${global.OwnerName}`,
                thumbnail: BotLogo,
                mediaType: 2,
                mediaUrl: `${global.website}`,
                sourceUrl: `${global.website}`
              }
            }
          }, { quoted: m })
        } catch {
          reply("Link error!")
        }
      }
        break;


      case 'jpeg': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args[0]) return reply(`Please provide link!`)
        try {
          A17.sendMessage(from, { image: { url: args[0] }, caption: "Success!" }, { quoted: m })
        } catch {
          reply("Link error")
        }
      }
        break;


      case 'swm': case 'take': case 'stickerwm': case 'steal': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "🫡", key: m.key } })

        if (!args.join(" ")) return reply(`Like use -take A17|By: Kai`)
        const swn = args.join(" ")
        const pcknm = swn.split("|")[0];
        const atnm = swn.split("|")[1];
        if (m.quoted.isAnimated === true) {
          A17.downloadAndSaveMediaMessage(quoted, "gifee")
          A17.sendMessage(from, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m })
        } else if (/image/.test(mime)) {
          let media = await quoted.download()
          let encmedia = await A17.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
          await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds is allowed!')
          let media = await quoted.download()
          let encmedia = await A17.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
          await fs.unlinkSync(encmedia)
        } else {
          reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 seconds is allowed!`)
        }
      }
        break;


      case 'smeme': case 'stickermeme': case 'stickmeme': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "⌛", key: m.key } })

        let { TelegraPh } = require('./lib/uploader')
        if (!text) return reply(`Send/reply Photo With Caption ${prefix + command} *text*`)
        if (text.includes('|')) return reply(`Send/reply Photo With Caption ${prefix + command} *text*`)
        if (!/image/.test(mime)) return reply(`Send/reply Photo With Caption ${prefix + command} *text*`)
        reply(mess.wait)
        mee = await A17.downloadAndSaveMediaMessage(quoted)
        mem = await TelegraPh(mee)
        meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
        memek = await A17.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(memek)
      }
        break;


      case 'sgif': case 'sticker': case 's': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "🌝", key: m.key } })
        if (/image/.test(mime)) {
          let media = await quoted.download()
          let encmedia = await A17.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
          await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
          let media = await quoted.download()
          let encmedia = await A17.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
          await fs.unlinkSync(encmedia)
        } else {
          reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
        }
      }
        break;

      case 'bc': case 'broadcast': case 'bcall': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        if (!args.join(" ")) return reply(`Please enter some text to broadcast! \n\nExample : ${prefix + command} ${global.OwnerName}`)
        let anu = await store.chats.all().map(v => v.id)
        reply(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
        for (let yoi of anu) {
          await sleep(1500)
          let btn = [{
            quickreplyButton: {
              displayText: '💡 Menu 💡',
              id: '-menu'
            }
          }, {
            quickreplyButton: {
              displayText: 'Bot Owner',
              id: '-owner'
            }
          }]
          let txt = `「 *${global.OwnerName}'s Notice* 」\n\n${text}`
          A17.send5ButImg(yoi, txt, `${global.BotName}`, BotLogo, btn, Thumb)
        }
        reply('Broadcast Sent !')
      }
        break;
case 'banpromosi': {
    if (!isCreator) return reply(mess.botowner);

    const input = args[0]?.toLowerCase();
    if (!['on', 'off'].includes(input)) {
        return reply('⚠️ Gunakan format:\n.banpromosi on\n.banpromosi off');
    }

    const isBan = input === 'on';
    const groupId = m.chat;
    const dbPath = './database/group.json';

    let groupDb = {};
    if (fs.existsSync(dbPath)) {
        try {
            groupDb = JSON.parse(fs.readFileSync(dbPath));
        } catch (e) {
            console.error('❌ Gagal membaca group.json:', e.message);
            return reply('❌ Gagal membaca database grup.');
        }
    }

    // Gabungkan properti lama dan baru
    groupDb[groupId] = {
        ...(groupDb[groupId] || {}),
        promosi: !isBan ? true : false
    };

    try {
        fs.writeFileSync(dbPath, JSON.stringify(groupDb, null, 2));
        reply(isBan
            ? '✅ Grup ini telah diblokir dari autopromosi.'
            : '✅ Grup ini telah diizinkan kembali menerima autopromosi.');
    } catch (e) {
        console.error('❌ Gagal menulis ke group.json:', e.message);
        reply('❌ Gagal menyimpan perubahan.');
    }

    break;
}
case 'listbanpromosi': {
    if (!isCreator) return reply(mess.botowner);

    const fs = require('fs');
    const path = require('path');

    const groupDbPath = './database/group.json';
    let groupDb = {};

    if (fs.existsSync(groupDbPath)) {
        try {
            groupDb = JSON.parse(fs.readFileSync(groupDbPath));
        } catch (e) {
            console.error('❌ Gagal membaca group.json:', e.message);
            return reply('❌ Gagal membaca data grup.');
        }
    }

    // Ambil semua grup yang promosi-nya false
    const bannedGroups = Object.entries(groupDb)
        .filter(([_, data]) => data.promosi === false)
        .map(([id, _]) => id);

    if (bannedGroups.length === 0) {
        return reply('✅ Tidak ada grup yang diblokir dari promosi.');
    }

    let text = `📛 *Daftar Grup yang Diblokir Promosi:*\n\n`;

    for (let i = 0; i < bannedGroups.length; i++) {
        const groupId = bannedGroups[i];
        let name = '❓ (Tidak diketahui)';

        try {
            const metadata = await A17.groupMetadata(groupId);
            name = metadata.subject;
        } catch {
            name = '❌ (Bot bukan member)';
        }

        text += `*${i + 1}.* ${name}\nID: ${groupId}\n\n`;
    }

    reply(text.trim());
    break;
}
case 'banallpromosi': {
    if (!isCreator) return reply(mess.botowner);

    const groupDbPath = './database/group.json';
    let groupDb = {};

    // Baca data group.json
    if (fs.existsSync(groupDbPath)) {
        try {
            groupDb = JSON.parse(fs.readFileSync(groupDbPath, 'utf8'));
        } catch (e) {
            console.error('❌ Gagal membaca group.json:', e.message);
            return reply('❌ Gagal membaca database grup.');
        }
    }

    // Ambil semua grup yang bot tergabung
    const getGroups = await A17.groupFetchAllParticipating();
    const groups = Object.entries(getGroups).map(entry => entry[1]);
    const allGroupIds = groups.map(v => v.id);

    let count = 0;

    for (const groupId of allGroupIds) {
        groupDb[groupId] = {
            ...(groupDb[groupId] || {}),
            promosi: false
        };
        count++;
    }

    try {
        fs.writeFileSync(groupDbPath, JSON.stringify(groupDb, null, 2));
        reply(`⛔ Semua *${count} grup* telah diblokir dari promosi.`);
    } catch (e) {
        console.error('❌ Gagal menulis ke group.json:', e.message);
        reply('❌ Gagal menyimpan perubahan.');
    }

    break;
}

case 'unbanallpromosi': {
    if (!isCreator) return reply(mess.botowner);

    const fs = require('fs');
    const path = require('path');

    const groupDbPath = './database/group.json';
    let groupDb = {};

    if (fs.existsSync(groupDbPath)) {
        try {
            groupDb = JSON.parse(fs.readFileSync(groupDbPath));
        } catch (e) {
            console.error('❌ Gagal membaca group.json:', e.message);
            return reply('❌ Gagal membaca data grup.');
        }
    }

    let count = 0;

    for (let groupId in groupDb) {
        if (groupDb[groupId]?.promosi === false) {
            // Kamu bisa hapus field promosi, atau set ke true
            delete groupDb[groupId].promosi;
            count++;
        }
    }

    try {
        fs.writeFileSync(groupDbPath, JSON.stringify(groupDb, null, 2));
        reply(`✅ Berhasil membuka blokir promosi dari *${count} grup*.`);
    } catch (e) {
        console.error('❌ Gagal menulis group.json:', e.message);
        reply('❌ Gagal menyimpan perubahan.');
    }

    break;
}
case 'updatehczip': {
    if (!isCreator) return reply(mess.botowner);
	if (!m.quoted || !m.quoted.mtype || m.quoted.mtype !== 'documentMessage') {
		return reply('❌ Balas file dokumen .zip yang ingin diupdate.');
	}

	const mime = m.quoted.mimetype || '';
	const fileName = m.quoted.filename || 'update.zip';

	if (!mime.includes('zip') && !fileName.endsWith('.zip')) {
		return reply('❌ File bukan .zip');
	}


    reply('📥 Mengunduh dan memproses file zip...');
    const buffer = await A17.downloadMediaMessage(m.quoted);

    const tmpZipPath = path.resolve('temp_hc.zip');
    fs.writeFileSync(tmpZipPath, buffer);

    const AdmZip = require('adm-zip'); // pastikan sudah install: npm i adm-zip
    const zip = new AdmZip(tmpZipPath);

    const extractPath = path.resolve('database/filehc');

    try {
        // 🧹 Hapus semua isi filehc dulu
        if (fs.existsSync(extractPath)) {
            const filesToDelete = fs.readdirSync(extractPath);
            for (const file of filesToDelete) {
                fs.unlinkSync(path.join(extractPath, file));
            }
            console.log('🧹 Folder filehc dibersihkan.');
        } else {
            fs.mkdirSync(extractPath, { recursive: true });
        }

        // 🧩 Ekstrak zip ke filehc
        zip.extractAllTo(extractPath, true);
        fs.unlinkSync(tmpZipPath); // hapus zip sementara

        const extracted = fs.readdirSync(extractPath).filter(f => f.endsWith('.hc'));
        reply(`✅ File HC berhasil diperbarui!\n📂 Total file: ${extracted.length}`);
        console.log('📁 File .hc saat ini:', extracted);
    } catch (err) {
        console.error('❌ Gagal update filehc:', err.message);
        reply('❌ Gagal memproses file zip.');
    }
    break;
}

case 'filepromosi': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);

    const groupDbPath = path.resolve('database/group.json');
    const folderPath = path.resolve('database/filehc');

    let groupDb = {};
    if (fs.existsSync(groupDbPath)) {
        try {
            groupDb = JSON.parse(fs.readFileSync(groupDbPath, 'utf8'));
        } catch (e) {
            console.error('❌ Gagal membaca group.json:', e.message);
        }
    }

    if (!fs.existsSync(folderPath)) {
        return reply('🚫 Folder filehc tidak ditemukan!');
    }

    const allFiles = fs.readdirSync(folderPath);
    const hcFiles = allFiles.filter(f => /\.hc['"]?$/.test(f.toLowerCase()));

    if (hcFiles.length === 0) {
        return reply('📭 Tidak ada file .hc yang tersedia untuk dikirim.');
    }

    let getGroups = await A17.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).map(entry => entry[1]);
    let anu = groups.map(v => v.id);

    reply(`📁 Mengirim file .hc ke ${anu.length} grup...`);

    let grupDikirim = 0;
    let grupDilewati = 0;

    const randomDelay = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    for (let i = 0; i < anu.length; i++) {
        const groupId = anu[i];

        if (groupDb[groupId]?.promosi === false) {
            console.log(`⏩ Lewati grup ${groupId} (promosi: false)`);
            grupDilewati++;
            continue;
        }

        try {
            for (const fileName of hcFiles) {
                const filePath = path.join(folderPath, fileName);
                const fileBuffer = fs.readFileSync(filePath);
                await A17.sendMessage(groupId, {
                    document: fileBuffer,
                    fileName: fileName.replace(/['"]+$/, ''),
                    mimetype: 'application/octet-stream'
                });
                console.log(`📁 Kirim file ${fileName} ke grup ${groupId}`);
            }

            grupDikirim++;
            await new Promise(res => setTimeout(res, randomDelay(3000, 5000)));
        } catch (err) {
            console.error(`❌ Gagal kirim file ke grup ${groupId}:`, err.message);
        }
    }

    reply(`✅ Selesai mengirim file .hc\n\n✅ Dikirim ke: ${grupDikirim} grup\n⏩ Dilewati: ${grupDilewati} grup`);
    break;
}

case 'promosi':
case 'bcgroup': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);

    const groupDbPath = path.resolve('database/group.json');
    const folderPath = path.resolve('database/filehc');

    let groupDb = {};
    if (fs.existsSync(groupDbPath)) {
        try {
            groupDb = JSON.parse(fs.readFileSync(groupDbPath, 'utf8'));
        } catch (e) {
            console.error('❌ Gagal membaca group.json:', e.message);
        }
    }

    let getGroups = await A17.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).map(entry => entry[1]);
    let anu = groups.map(v => v.id);

    const readJSON = (filePath) => {
        try {
            const data = fs.readFileSync(path.resolve(filePath), 'utf8');
            const parsed = JSON.parse(data);
            return parsed.text && parsed.text.trim() ? parsed.text : null;
        } catch {
            return null;
        }
    };

    const promoText = readJSON('database/promo.json');
    const autoscriptText = readJSON('database/autoscript.json');
    const recodeText = readJSON('database/recode.json');
    const vpsText = readJSON('database/VPs.json');
    if (!promoText && !autoscriptText && !recodeText && !vpsText) {
        return reply('❌ Semua pesan kosong! Harap atur pesan dengan perintah terkait.');
    }

    // ➔ Hitung Estimasi
    const hcFiles = fs.existsSync(folderPath)
      ? fs.readdirSync(folderPath).filter(f => /\.hc['"]?$/.test(f.toLowerCase()))
      : [];

    const jumlahFileHc = hcFiles.length;

    const grupSiapKirim = anu.filter(id => {
      const allowPromo = groupDb[id]?.promosi !== false;
      return allowPromo && (promoText || autoscriptText || recodeText || vpsText || jumlahFileHc > 0);
    });

    const estimasiPerGrupDetik =
      (promoText ? 2.5 : 0) +
      (autoscriptText ? 2.5 : 0) +
      (recodeText ? 2.5 : 0) +
      (vpsText ? 2.5 : 0) +
      (jumlahFileHc * 2.5) + // kirim file
      4; // delay antar grup

    const totalDetik = grupSiapKirim.length * estimasiPerGrupDetik;
    const selesai = new Date(Date.now() + totalDetik * 1000);

    const formatWaktu = (date) =>
      date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    reply(`📢 Mulai mengirim promosi ke ${grupSiapKirim.length} grup...\n🕒 Estimasi selesai: ${formatWaktu(selesai)}`);

    const randomDelay = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    let grupDikirim = 0;
    let grupDilewati = 0;

for (let i = 0; i < anu.length; i++) {
    const groupId = anu[i];

    if (groupDb[groupId]?.promosi === false) {
        console.log(`⏩ Lewati grup ${groupId} (promosi: false)`);
        grupDilewati++;
        continue;
    }

    const sendWithContext = async (text, body) => {
        try {
            await A17.sendMessage(groupId, {
                text,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `${nowtime}`,
                        body,
                        thumbnailUrl: global.Thumb,
                        sourceUrl: global.website,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                    },
                },
            });
        } catch (e) {
            console.error(`❌ Gagal kirim teks ke grup ${groupId}:`, e.message);
        }
    };

    try {
        if (promoText) {
            await sendWithContext(promoText, `Promo Terbaru dari ${global.BotName}`);
            await new Promise(res => setTimeout(res, randomDelay(2000, 3000)));
        }
        if (autoscriptText) {
            await sendWithContext(autoscriptText, `Autoscript Tunneling by ${global.BotName}`);
            await new Promise(res => setTimeout(res, randomDelay(2000, 3000)));
        }
        if (recodeText) {
            await sendWithContext(recodeText, `Jasa Recode ${global.BotName}`);
            await new Promise(res => setTimeout(res, randomDelay(2000, 3000)));
        }
        if (vpsText) {
            await sendWithContext(vpsText, `VPS ${global.BotName}`);
            await new Promise(res => setTimeout(res, randomDelay(2000, 3000)));
        }

        if (jumlahFileHc > 0) {
            for (const fileName of hcFiles) {
                const filePath = path.join(folderPath, fileName);
                try {
                    const fileBuffer = fs.readFileSync(filePath);
                    await A17.sendMessage(groupId, {
                        document: fileBuffer,
                        fileName: fileName.replace(/['"]+$/, ''),
                        mimetype: 'application/octet-stream'
                    });
                    console.log(`📁 Kirim file ${fileName} ke grup ${groupId} (${i + 1}/${anu.length})`);
                    await new Promise(res => setTimeout(res, randomDelay(2000, 3000)));
                } catch (e) {
                    console.error(`❌ Gagal kirim file ${fileName} ke ${groupId}:`, e.message);
                }
            }
        }

        grupDikirim++;
        console.log(`✅ Selesai kirim ke grup ${groupId}`);
        await new Promise(resolve => setTimeout(resolve, randomDelay(3000, 5000)));
    } catch (err) {
        console.error(`⏩ Error umum di grup ${groupId}:`, err.message);
        grupDilewati++;
    }
}

await A17.sendMessage(from, {
    text: `✅ *Promosi selesai!*\n\n✅ Dikirim ke: *${grupDikirim}* grup\n⏩ Dilewati: *${grupDilewati}* grup`
}, { quoted: null });

    break;
}


case 'promosibot': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);

    const fs = require('fs');
    const path = require('path');

    // Ambil semua grup
    let getGroups = await A17.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).map(entry => entry[1]);
    let anu = groups.map(v => v.id);

    // Baca group.json
    const groupDbPath = path.join(__dirname, '../database/group.json');
    let groupDb = {};
    if (fs.existsSync(groupDbPath)) {
        try {
            groupDb = JSON.parse(fs.readFileSync(groupDbPath, 'utf8'));
        } catch (e) {
            console.error('❌ Gagal membaca group.json:', e.message);
        }
    }

    // Fungsi untuk membaca file JSON
    function readJSON(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const parsed = JSON.parse(data);
            return parsed.text && parsed.text.trim() ? parsed.text : null;
        } catch (err) {
            console.error(`Error reading ${filePath}:`, err);
            return null;
        }
    }

    const promoText = readJSON('./database/promo.json');
    const autoscriptText = readJSON('./database/autoscript.json');
    const recodeText = readJSON('./database/recode.json');

    if (!promoText && !autoscriptText && !recodeText) {
        return reply('❌ Semua pesan kosong! Harap atur pesan dengan perintah terkait.');
    }

    reply(`📢 Memulai promosi ke ${anu.length} grup.`);

    const randomDelay = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const sendBatchMessages = async (groupBatch) => {
        for (let groupId of groupBatch) {
            // ⛔ Lewati jika grup diban dari promosi
            if (groupDb[groupId]?.promosi === false) {
                console.log(`⏩ Lewati grup ${groupId} (promosi: false)`);
                continue;
            }

            try {
                await slideButton(groupId);
            } catch (error) {
                console.error(`❌ Gagal mengirim ke grup ${groupId}:`, error);
            }

            await new Promise(resolve => setTimeout(resolve, randomDelay(2000, 5000)));
        }
    };

    const batchSize = 5;
    for (let i = 0; i < anu.length; i += batchSize) {
        const groupBatch = anu.slice(i, i + batchSize);
        await sendBatchMessages(groupBatch);
        await new Promise(resolve => setTimeout(resolve, randomDelay(10000, 15000)));
    }

    reply(`✅ Promosi berhasil dikirim ke ${anu.length} grup.`);
    break;
}

		
case 'send': {
  try {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);

    // Memastikan bahwa args ada
    if (!args.join("")) return reply(`Contoh perintah: send +62 851-6571-8519`);

    // Gabungkan args menjadi satu string
    const swn = args.join(" ");
    
    // Mengambil nomor target dan memisahkan pesan
    const target = swn.split(".")[0];  // Ambil bagian pertama (nomor)

    // Memastikan nomor telepon valid
    const targetNumber = target.replace(/[^0-9]/g, ''); // Hapus karakter non-digit

    // Mengecek apakah nomor valid (memiliki panjang minimal 10 digit)
    if (targetNumber.length < 10) {
      return reply(`Nomor telepon ${targetNumber} tidak valid. Pastikan nomor telepon lengkap dan benar.`);
    }

    // Format nomor WhatsApp yang benar
    var org = targetNumber + '@s.whatsapp.net'; 

    // Fungsi untuk membaca file JSON
    const readJson = (filePath) => {
      try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data).text || "";
      } catch (err) {
        console.error(`Error membaca file ${filePath}:`, err);
        return ""; // Mengembalikan string kosong jika file error
      }
    };

    // Membaca file JSON
    const promoText = readJson('./database/promo.json');
    const autoscriptText = readJson('./database/autoscript.json');
    const recodeText = readJson('./database/recode.json');
    const vpsText = readJson('./database/VPs.json');

    // Fungsi untuk mengirim pesan dengan format terpisah
    const sendFormattedMessage = async (title, body) => {
      if (body) {
        let message = {
          text: `📢 ${body}`,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `${nowtime}`,
              body: title,
              thumbnailUrl: global.Thumb,
              sourceUrl: global.website,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        };
        await A17.sendMessage(org, message);
        await sleep(1500); // Delay antar pesan
      }
    };

    // Kirim pesan Promo jika ada
    await sendFormattedMessage(
      "Promo Terbaru",
      promoText,
      'https://telegra.ph/file/a9398dd23261b48b5b5c2.jpg'
    );

    // Kirim pesan Autoscript jika ada
    await sendFormattedMessage(
      "Autoscript Tunneling",
      autoscriptText,
      'https://telegra.ph/file/d7c3d152d9fff8f85ee62.jpg'
    );

    // Kirim pesan Jasa Recode jika ada
    await sendFormattedMessage(
      "Jasa Recode",
      recodeText,
      'https://telegra.ph/file/a9398dd23261b48b5b5c2.jpg'
    );

    // Kirim pesan VPS jika ada
    await sendFormattedMessage(
      "VPS Newbie",
      vpsText,
      'https://telegra.ph/file/5dcae7a3d0b3c4d3f60c4.jpg'
    );

    // Cek apakah semua file kosong
    if (!promoText && !autoscriptText && !recodeText && !vpsText) {
      return reply(`❌ Semua pesan kosong!\nGunakan perintah:\n- *${prefix}setpromo <text>*\n- *${prefix}setautoscript <text>*\n- *${prefix}setrecode <text>*\n- *${prefix}setvps <text>*`);
    }

    reply('✅ *Preview Pesan Berhasil Dikirim!*');

  } catch (error) {
    console.error("Error saat membaca file promo/autoscript/recode/vps:", error);
    reply('❌ Terjadi kesalahan saat menampilkan preview pesan. Pastikan format file JSON sudah benar.');
  }
  break;
}
	
      case 'menu':
      case 'allmenu': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        try {
          await A17.sendMessage(from, { react: { text: "✨", key: m.key } });


const helpexitText = `\nHello ${pushname} Dear...!! ${nowtime} ,

⏳  *Date:* ${kaidate}

━━━━━━━━━━━━━━━━━━━━
        *Bot Info*    
━━━━━━━━━━━━━━━━━━━━

⌯ *My prefix* : ${prefix}
⌯ *Bot User Name* : ${pushname} 
⌯ *Owner Name* : ${global.OwnerName} 
⌯ *Runtime* : ${runtime(process.uptime())} 
⌯ *RAM* : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
⌯ *Total CPU Usage* : ${totalCpuUsage}%
⌯ *Platform* : Linux

━━━━━━━━━━━━━━━━━━━━
        *MENU UTAMA*    
━━━━━━━━━━━━━━━━━━━━

⌯ ${prefix}tutor
⌯ ${prefix}bug <config>
⌯ ${prefix}menuserver
⌯ ${prefix}setpromo
⌯ ${prefix}setrecode
⌯ ${prefix}setautoscript
⌯ ${prefix}setvps
⌯ ${prefix}setwebsite
⌯ ${prefix}setbanner
⌯ ${prefix}setqris
⌯ ${prefix}setqrislink
⌯ ${prefix}setjpm
⌯ ${prefix}setgruplink
⌯ ${prefix}setemailpass
⌯ ${prefix}promosi
⌯ ${prefix}banpromosi
⌯ ${prefix}banallpromosi
⌯ ${prefix}unbanallpromosi
⌯ ${prefix}listbanpromosi
⌯ ${prefix}updatehczip
⌯ ${prefix}delpromo
⌯ ${prefix}self
⌯ ${prefix}public

━━━━━━━━━━━━━━━━━━━━
        *MENU GRUP*    
━━━━━━━━━━━━━━━━━━━━

⌯ ${prefix}antilink
⌯ ${prefix}welcome
⌯ ${prefix}sepak
⌯ ${prefix}tagall
⌯ ${prefix}setgcpp
⌯ ${prefix}setdesc <Description Grup>
⌯ ${prefix}setname <NameGroup>
⌯ ${prefix}group <open/close>
⌯ ${prefix}revoke
⌯ ${prefix}gclink
⌯ ${prefix}add
⌯ ${prefix}admin
⌯ ${prefix}joinall
⌯ ${prefix}join
⌯ ${prefix}bye

━━━━━━━━━━━━━━━━━━━━
         *DO PANEL*    
━━━━━━━━━━━━━━━━━━━━

⌯ ${prefix}listdroplet
⌯ ${prefix}deldroplet
⌯ ${prefix}sisadroplet
⌯ ${prefix}rebuild
⌯ ${prefix}r1c1
⌯ ${prefix}r2c1
⌯ ${prefix}r4c2
⌯ ${prefix}r8c4

━━━━━━━━━━━━━━━━━━━━
         *Tools*    
━━━━━━━━━━━━━━━━━━━━

⌯ ${prefix}gitclone
⌯ ${prefix}uploadfile
⌯ ${prefix}tolink
⌯ ${prefix}google
⌯ ${prefix}translate
⌯ ${prefix}gimage
⌯ ${prefix}domaincheck

━━━━━━━━━━━━━━━━━━━━
         *Info*    
━━━━━━━━━━━━━━━━━━━━

⌯ ${prefix}list
⌯ ${prefix}listgc
⌯ ${prefix}totalgc
⌯ ${prefix}qr
⌯ ${prefix}server
⌯ ${prefix}ip
⌯ payment

━━━━━━━━━━━━━━━━━━━━
         *THX TO..*    
━━━━━━━━━━━━━━━━━━━━

⚠️ *ALLAH SWT*
⚠️ *${global.BotName}*
⚠️ *MY BROTHER :)*
━━━━━━━━━━━━━━━━━━━━
`;


A17.sendMessage(m.chat, {
            text: helpexitText,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: BotName,
                    body: `Follow Saluran Kami`,
                    thumbnailUrl: global.Thumb,
                    sourceUrl: global.website,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (err) {
        console.error('Error sending help menu:', err);
        reply('Oops, terjadi kesalahan saat mengirim menu bantuan.');
    }
    break;
}

      case 'support': case 'supportgc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        A17.sendMessage(from, { react: { text: "💫", key: m.key } })
        reply(`⚙ *My developer's group:* ⚙ https://chat.whatsapp.com/LXNFSIMP3wD4mMq2jZAx3v`)
      }
        break;


case 'tutor':
case 'tutorial': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

const list_tutorial = `_Berikut Tutorial Yang Disesdiakan!!_

_*⭔ Tutorial Lengkap*_
https://www.youtube.com/playlist?list=PLTDz6Tj-46qMZMS299iOlAvMpjmxV0Nlr

_*⭔ Tutorial Versi Textnya Kamu Bisa Ketik list di bawah*_

.pasangconfighcv2ray
.pasangconfigdrak
.pasangconfigv2box
.carabeli`

A17.sendMessage(m.chat, {
    text: list_tutorial,
    contextInfo: {
        externalAdReply: {
            showAdAttribution: true,
            title: `${nowtime} ${pushname}`,
            body: global.BotName,
            thumbnailUrl: 'https://i.ytimg.com/vi/cfIi2pvMffo/hqdefault.jpg', // Thumbnail harus berupa URL gambar
            sourceUrl: 'https://www.youtube.com/playlist?list=PLTDz6Tj-46qMZMS299iOlAvMpjmxV0Nlr', // URL video atau playlist
            mediaType: 1, // Untuk media seperti video atau gambar
			renderLargerThumbnail: true
        }
    }
});
}
break


case 'pasangconfighcv2ray': {

const gantisound = `_*⭔ Cara Memasang Config V2ray HC*_

_*⭔ Langkah 1*
Copy Akun Yang Diberikan Oleh Admin Biasanya Diawali dengan VMESS:// atau VLESS:// atau Trojan://

_*⭔ Langkah 2*_
Masuk Apk Http Custom Dan Pilih Gambar Potongan Pasel 🧩 Sebelah Tulisan HTTP Custom

_*⭔ Langkah 3*_
Pilih V2ray Setting Dan Pastekan text yang Sudah dicopy Sebelumnya
(Anda Juga Bisa melakukan Paste dengan gambar papan 📋 Pada Pojok Kanan Atas)

_*⭔ Langkah 4*_
Kemudian Kembali dengan Panah back Atau Tombol kembali, Ceklist V2ray dan Klik Connect`;
reply(gantisound)

}
break



case 'pasangconfigdrak': {

const gantifotomenu = `_*⭔ Cara Memasang Config DrakTunnel*_

_*⭔ Langkah 1*_
Copy Akun Yang Diberikan Oleh Admin Biasanya Diawali dengan VMESS:// atau VLESS:// atau Trojan:// atau draktunnel://

_*⭔ Langkah 2*_
Buka Apk DrakTunnel Kemudian Pilih Titik Tiga Pada Pijok Kanan Atas

_*⭔ Langkah 3*_
pilih Config Kemudian Pilih Import Config Kemudian Pilih Clipboard

_*⭔ Langkah 4*_
Muncul Konfirmasi Dengan Nama Akun, Pilih OK

_*⭔ Langkah 5*_
Kemudian Klik Connect pada halaman DrakTunnel`;
reply(gantifotomenu)

}
break


case 'pasangconfigv2box': {

const gantiowner = `_*⭔ Cara Memasang Config V2BOX*_

_*⭔ Langkah 1*_
Copy Akun Yang Diberikan Oleh Admin Biasanya Diawali dengan VMESS:// atau VLESS:// atau Trojan://

_*⭔ Langkah 2*_
Buka Apk *V2box* Dan Pilih Tab *Config* Pada Halaman Awal 
(Biasaya ada di bagian bawah tengah)

_*⭔ Langkah 3*_
Pilih Tombol Plus ➕ Pada Bagian Pojok Atas Layar, Pilih Paste Uri Urutan Pertama sendiri,

_*⭔ Langkah 4*_
Config akan Masuk Ke dalam List, pilih Config yang baru saja Masuk Dan Klik Connect`;
reply(gantiowner)

}
break


case 'carabeli': {

    const gantisuperowner = `_*⭔ Cara Membeli Config Premium*_
    
    _*⭔ Langkah 1*_
    Silahkan Hubungin Whatasapp Admin di Whatsapp.nevpn.site / Nomor Bot ini
    
    _*⭔ Langkah 2*_
    Infokan Kepada Admin [contoh]
	Nama anda : Abdul Putra [Abdul]
    Config : sesuai Paket aktif [XL Edukasi]
	Lokasi : Posisi Anda Saat ini [Jabar]
	Harga : Harga Yang anda Inginkan [10 K]
	
    _*⭔ Langkah 3*_
    Lakukan Pembayaran Dan Kirimkan Bukti pembayaran Kepada Admin
	Biasanya Admin Akan Mengirim Nomer Dana Namun Jika Anda Ingin Melaui Qriss Mintalah
	Foto Qris Kepada Admin,
    
    _*⭔ Langkah 4*_
    Tunggulah Sebentar Admin akan Sesegera Mungkin Membuatkan Config Pesanan Anda`;
    reply(gantisuperowner)
    
    }
    break

      case 'bugmenu': case 'bug': case '`info bug config`': {
		if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
const helpexit = `Hey kak *${pushname}* ${nowtime} ,

━━━━━━━━━━━━━━━━━━━━
        *INFO BUG*    
━━━━━━━━━━━━━━━━━━━━

⌯ ${prefix}axisgame
⌯ ${prefix}axissushiroll
⌯ ${prefix}byurg
⌯ ${prefix}byuggwp
⌯ ${prefix}isatfun
⌯ ${prefix}xledu
⌯ ${prefix}xlflex
⌯ ${prefix}xlsosmed
⌯ ${prefix}xlcon
⌯ ${prefix}xlvision
⌯ ${prefix}xlvideo
⌯ ${prefix}tselilped
⌯ ${prefix}tselopok

━━━━━━━━━━━━━━━━━━━━
        *THX TO..*    
━━━━━━━━━━━━━━━━━━━━

⚠️ *ALLAH SWT*
⚠️ *${global.BotName}*
⚠️ *MY BROTHER :)*
━━━━━━━━━━━━━━━━━━━━
`;

A17.sendMessage(m.chat, {
    text : helpexit,
    contextInfo: {
    externalAdReply: {
        showAdAttribution: true, 
        title: `${nowtime} ${pushname}`,
        body: global.BotName,
        thumbnailUrl: global.Thumb,
        sourceUrl: global.website,
        mediaType: 1,
        renderLargerThumbnail: true
    }
    }
}
)
	  }
        break;



      //qr
      case 'qr': case 'qris': case 'qrcode': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        A17.sendMessage(from, { react: { text: "✨", key: m.key } })
    const teksPath = path.join(__dirname, './database/tekspay.json');

    let teks = 'Pembayaran via QRIS';
    if (fs.existsSync(teksPath)) {
        const teksData = JSON.parse(fs.readFileSync(teksPath));
        teks = teksData.text || teks;
    }

		try {
        const buttonMessage = {
            image: { url: global.Qris },
            caption: teks,
            headerType: 4
        };
        return A17.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        return reply(teks); // fallback jika tidak ada gambar
      }
  }
        break;

	case 'sendpay': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);

    // Validasi input
    if (!args.length) return reply(`Contoh perintah:\n.sendpay +62 851-6571-8519`);

    // Gabungkan argumen jadi string
    const input = args.join(" ");
    const rawNumber = input.split(".")[0].replace(/[^0-9]/g, '');

    if (rawNumber.length < 10) {
        return reply(`Nomor telepon *${rawNumber}* tidak valid. Pastikan nomor lengkap dan benar.`);
    }

    const targetJid = rawNumber + '@s.whatsapp.net';
    await A17.sendMessage(from, { react: { text: "✨", key: m.key } });

    const teksPath = path.join(__dirname, './database/tekspay.json');

    // Default caption
    let captionText = 'Pembayaran via QRIS';
    if (fs.existsSync(teksPath)) {
        try {
            const teksData = JSON.parse(fs.readFileSync(teksPath));
            captionText = teksData.text || captionText;
        } catch (e) {
            console.error("Gagal membaca teks QRIS:", e);
        }
    }
        try {
            await A17.sendMessage(targetJid, {
                image: { url: global.Qris },
                caption: captionText,
                headerType: 4
            }, { quoted: m });

            reply(`✅ Tagihan pembayaran berhasil dikirim ke *${rawNumber}*`);
        } catch (e) {
            console.error("Gagal kirim gambar:", e);
            reply(`✅ Tagihan pembayaran tanpa qris berhasil dikirim ke *${rawNumber}*`);
        }
}
    break;
	
	case 'axisgame':
	case 'axissushiroll':
	case 'byurg':
	case 'byuggwp':
	case 'isatfun':
	case 'xledu':
	case 'xlflex':
	case 'xlsosmed':
	case 'xlvision':
	case 'xlvidio':
	case 'xlcon':
	case 'tselilped':
	case 'tselopok': 
    if (payloadDB[command]) await sendPayload(m, payloadDB[command]);
    break;
  
      default:

		if (budy.startsWith('>')) {
			const fs = require('fs');
			const path = require('path'); // ⬅️ INI WAJIB ADA

			const keyword = budy.slice(1).trim().toLowerCase();
			if (!keyword) return ;

			const folderPath = path.join(__dirname, './database/filehc');
			if (!fs.existsSync(folderPath)) return reply('🚫 Folder filehc tidak ditemukan!');

			const allFiles = fs.readdirSync(folderPath);
			const matchedFiles = allFiles.filter(f => f.toLowerCase().includes(keyword) && f.endsWith('.hc'));

			if (matchedFiles.length === 0) {
				let available = allFiles.filter(f => f.endsWith('.hc')).map(f => `- ${f}`).join('\n');
				if (!available) available = '_Tidak ada file .hc tersedia di folder._';

				return reply(
					`📁 *Daftar file tersedia:*\n${available}`
				);

			}

			reply(`📂 Ditemukan *${matchedFiles.length} file*`);

			for (const fileName of matchedFiles) {
				const filePath = path.join(folderPath, fileName);
				try {
					const fileBuffer = fs.readFileSync(filePath);
					await A17.sendMessage(m.chat, {
						document: fileBuffer,
						fileName: fileName,
						mimetype: 'application/octet-stream'
					});
					console.log(`📁 Kirim file ${fileName} ke ${m.chat}`);
					await new Promise(res => setTimeout(res, 1000));
				} catch (err) {
					console.error(`❌ Gagal kirim file ${fileName}:`, err.message);
					await A17.sendMessage(m.chat, { text: `❌ Gagal kirim file: ${fileName}` });
				}
			}
		}


        if (budy.startsWith('$')) {
          if (!isCreator) return reply(mess.botowner)
          exec(budy.slice(2), (err, stdout) => {
            if (err) return A17.sendMessage(from, { image: ErrorPic, caption: String(err) }, { quoted: m })
            if (stdout) return reply(stdout)
          })
        }


        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith('broadcast')) return
          if (m.isBaileys) return
          let msgs = global.db.database
          if (!(budy.toLowerCase() in msgs)) return
          A17.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
        }
    }
  } catch (err) {
    A17.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), { quoted: m })
    console.log(err)
    let e = String(err)
    if (e.includes("not-authorized")) return
    if (e.includes("already-exists")) return
    if (e.includes("rate-overlimit")) return
    if (e.includes("Connection Closed")) return
    if (e.includes("Timed Out")) return
    if (e.includes("Value not found")) return
    if (e.includes("Socket connection timeout")) return
  }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})
