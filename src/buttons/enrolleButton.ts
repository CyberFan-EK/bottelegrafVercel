import { Markup } from "telegraf";

export  const enrolleButton = Markup.keyboard([
    ['🧠 Спеціальності'],
    ['😪🅱️✔ Необхідні ЗНО'],
    ['🎓 Програма «Подвійного диплома»'],
    ['😁🏅 Активності'],
  ])
    .oneTime()
    .resize();

 