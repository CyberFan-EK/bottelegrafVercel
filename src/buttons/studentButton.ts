import { Markup } from "telegraf";

export  const studentButton = Markup.keyboard([
    ['Графік навчання'],
    ['Розклад'],
    ['Дайджест'],
    ['⬅️ Головне меню'],
  ])
    .oneTime()
    .resize();

 