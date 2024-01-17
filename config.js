require("dotenv").config();
// SUDO,OWNER (split by comma)
let oo = "918891871875";
//---------------------------
global.owner = oo.split(",");
module.exports = {
  // MUST FI IT
  mongodb: "mongodb+srv://danielpeter:beka10beka10@cluster0.ef032ix.mongodb.net/?retryWrites=true&w=majority",// put your mongo db uri
  SESSION_ID: "",// put your session id
  //---------------------------------
  BOT_INFO: "Nxiii;Nazim;https://i.imgur.com/XJ0D4Tq.mp4",
  STICKER_DATA: "Nxiii;Nazim",
  MENTION: "true",
  MENTION_DATA: 'Nxiii;MULTI-DEVICE BOT BY TEAM SPAKY;https://wa.me/918891871875;https://i.imgur.com/P7HGkiK.png',
  MENTION_AUDIO: "https://graph.org/file/1464256c054cd85844659.mp4,https://graph.org/file/9696d880c07fd9557dad7.mp4",
  AUTO_STATUS_VIEW: "true",
  AUTOBIO: "",
  CAPTION: "Nxiii V-2.00",
  TENORAPI: "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c",
  PORT: "9000",
  PREFIX: ".",
};
