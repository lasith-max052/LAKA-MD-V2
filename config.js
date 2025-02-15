const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

FOOTER: process.env.FOOTER || "*◆─〈 ✦LAKA -MD-V2 𝐕𝟐✦ 〉─◆*",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tC37Q7B/20241220-122443.jpg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*SEEN YOUR STATUS BY Didula MD V2*",
ANTI_CALL: process.env.ANTI_CALL || "false",

//   Add your session id




SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~2ZF3hSxS#fBIRjBThjrk1jLr7Jt2hdZmWL6uPijR0Qcub2NHU0b0",



//   Add your session id









ALIVE_REACT: process.env.ALIVE_REACT || "⚠️",
};


