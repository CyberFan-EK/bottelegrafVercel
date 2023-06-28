import { Markup } from "telegraf";

export const menuButton = Markup.keyboard([
    ['👩‍💻 Абітурієнт'],
    ['📈 Студент'],
    ['👨‍🏫 Викладачі'],
    ['📑 Залишити анкету'],
  ])
    .oneTime()
    .resize();