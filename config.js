const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "xNwUDYpQ#38MSXteB0D01b76_GLFAs1AfeVqiVXVuTShH4_o2ZRY",
    HEART_REACT: process.env.HEART_REACT || "false",
    CAPTION: process.env.CAPTION || "*POWERED BY DEEP MD*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTHOR: (process.env.PACK_INFO?.split(';') || [])[0] || 'AWAIS MD',
    PACKNAME: (process.env.PACK_INFO?.split(';') || [])[1] || '923182832887',
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Awais-star-a11y/TESTING-REPO/raw/refs/heads/main/IMG-20250409-WA0093.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M AWAIS-MD WHATSAPP BOT 😊",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "DEEP MD",
    ANTI_VV: process.env.ANTI_VV || "true",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // change it to 'same' if you want to resend deleted message in same chat
    OWNER_NAME: process.env.OWNER_NAME || "DEEP JAYASINGHE", //replace with your name 
    OWNER_NUMBER: process.env.OWNER_NUMBER || "94766378148",// add your bot owner number
    DEV: process.env.DEV || "94766378148", //replace with your whatsapp number
    AUTOLIKESTATUS: process.env.AUTOLIKESTATUS || "false",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 Deep md`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
    };
    
