import { Markup } from "telegraf";

export  const teacherButton = Markup.keyboard([
    ['Завідувач кафедри'],
    ['Викладачі (співробітники)'],
    ['Розклад консультацій'],
    ['⬅️ Головне меню'],
  ])
    .oneTime()
    .resize();

 