import { Markup } from "telegraf";

export  const exitButton = Markup.keyboard([
    ['⬅️ Вихід']
 
  ])
    .oneTime()
    .resize();
