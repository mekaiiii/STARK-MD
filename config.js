const fs = require('fs'),
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://stark-pair.vercel.app";

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "STARK-MD~H4sIAAAAAAAAA5VU246jOBD9F78STbjmJrU0JBCa3MMlgazmwYABJ2CIMST0KP++onu6e6TdHfW+2QWuOnXOqfoJSIErtEQtmPwEJcUNZKg7srZEYAKmdRwjCnogggyCCfBVP45nU+6q11wIbdeL+rnunrPrYFtERZOMbXm5wy9rzfCfwKMHyjrIcPiHhHHZb6sNjjOn6gekL6+bjaPeikN28ItjNlwJKm35oUvx/vYEHl1GiCkmiV6mKEcUZkvU7iCmX4OPZ7ohLNpa3IZ8rNjHVX3zRoZj6DsPGoFbDnO93Np8ml/WX4Ofynlj55JgUfNCNp5jllykc0W9rHa6s7Pa0Ob2qe9eNXf/Br/CCUGRGSHCMGu/zLu4sqh9aNShMhfk0VipromeINmmikt4deVrlhWe4Oy08ZKvAT/lHhJN7v7sbY+W6Pjn/KQ77tCuWx1G4UDe7+1QvDfm2pB/B76j7165/B/ej3OtCgMcTFWnDM5xIbbl84uZRWdSx4PCuvgnhKhwDBau/jX4l4FED31fN0UoxWxzKiW3uWfi5jYdBWsyL+aaM4gjz5qR0Sd8yGr6J5RzRyWacVqU3GYelvPbynCTF7Tx8LJqnfCchmdydXwPX1vi9wtXuNQJyY+zxnu+KkyzPY5cazEylJs75qbqvcYaa3Hy9NrRBbVmBCbCowcoSnDFKGS4IF1MFnsARo2NQorYK7vAZHRxXMzl7Za58rzd8UUQCwOurYZJtMkafb9TtYW/dqh+eQI9UNIiRFWFomdcsYK2a1RVMEEVmPz1owcIurM33bpqI0HqgRjTirmkLrMCRu+qfnyFYVjUhNktCWfdAVEw4T/DiDFMkqojsiaQhilu0CyFrAKTGGYV+mgRURSBCaM1+hjbWRF1zDv22Fj4SwX0QP6qCI46k0uSKAvKSJKG0kT+Xn27dVlhWX4jiIEeyF7/GozGA14Qx4LEK7wykb934ccHvC5bhBjEWQUmYLbLNVIUz/q6UV8i1TBUPVFniQo+23k3xhvzuTsXxX4cLRcrqd2scy699gXM3XBQWXM9GEwZeYmOKV93C+6fScAEsEFlNpJa3g3Ng9d7C4UKXtnYWpVJs7qM7vbNsvXLbmNnBDfBNvGQTqxNf+ncMae1/aV9YMppPRAaUZEjMk+lOFic1aeuWoQaHKLfizV0p8uBPhPxnZsFMVtrono4xNOWmmxsIz69u88Kvz9wYmvtZW46nvOCV9hTQcHaPZGUKw1JoRG0Y9l0tWnclNPj8/7Nsq8jk/1aVfjVTZ1Q3TXG6HXyCezk+3dJ3uF2tuIfvd9e/tog/zGF01M2jVgjSTa2x6Ozs2gK2Iz9pjLzoW5ZBpcEp5F0KKJVmoPH40cPlBlkcUHzbsGXaUEQ6AFa1J1LTRIXf6g1U11T2ydm124GK6Z+Ot/BOaoYzEswEYbD8UCRh7L4+BsMAjJfMAcAAA==", // Add sess Id here especially when deploying on panels else use app.json and .env file...
    SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", // Add multiple numbers with country codes without (+), separated by comma
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // ✅ only ONE, default = true
    AUTO_STATUS_VIEWS: process.env.AUTO_STATUS_VIEWS || "true",
    AUTO_STATUS_REACTS: process.env.AUTO_STATUS_REACTS || "false",
    AUTO_STATUS_EMOJIS: process.env.AUTO_STATUS_EMOJIS || "❤️,💀,🌚,🌟,🔥,❤️‍🩹,🌸,🍁,🍂,🦋,🍥,🍧,🍨,🍫,🍭,🎀,🎐,🎗️,👑,🚩,🇵🇰,🍓,🍇,🧃,🗿,🎋,💸,🧸,🦢,✨,🌾,🌊,⚡,🌏,🕸️,🎀,🪄,🌝,🌜,💫,🤍,🖤,🤎,💜,💙", // Input your custom emojis
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ STATUS VIEWED BY STARK-MD", // Custom message
    MODE: process.env.MODE || "private", // Options: private, public, inbox, groups
    TGTOKEN:process.env.TGTOKEN || "7672295852:AAG0SEMHbM1jhkpodxHspJuVT5tiAhXPPpI",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923437393822", // Only 1 owner number here, others add to sudo numbers
    OWNER_NAME: process.env.OWNER_NAME || "𓂃ᷱ᪳𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄^᪲᪲᪲輪", // Custom name
    PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Custom
    PACK_NAME: process.env.PACK_NAME || "",
    PREFIX: process.env.PREFIX || ".",
    VERSION: process.env.VERSION || "9.0.0",
    ANTI_LINK: process.env.ANTI_LINK || "false", // true = kick, delete = delete, warn = warn
    ANTI_CALL: process.env.ANTI_CALL || "false",
    ANTIBAD: process.env.ANTIBAD || "false",
    BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Will be deleted if ANTIBAD is true
    ANTI_CALL_MSG: process.env.ANTI_CALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐒𝐓𝐀𝐑𝐊-𝐌𝐃ှ᪳𓆪", // Don't change
    BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", // Don't change
    AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
    AUTO_BIO: process.env.AUTO_BIO || "false",
    AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "STARK MD ALIVE",
    WELCOME: process.env.WELCOME || "false",
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // true = bluetick all messages, commands = bluetick commands only
    AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Multiple country codes separated by comma
    PRESENCE: process.env.PRESENCE || "null", // typing, recording, online, null
    TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter your timezone
};

// Auto-reload this config when file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update '${__filename}'`);
    delete require.cache[file];
    require(file);
});
