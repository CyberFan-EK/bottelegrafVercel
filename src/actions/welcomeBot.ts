import { bot } from "../index"
import { Context } from "telegraf";
import {menuButton} from '../buttons/menuButton'


export const welcomeBot = ()=> async (ctx: Context)=> {
  try {
    if (ctx.chat) {
      bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo');
}



  await ctx.reply(`Дякуємо, що ти тепер з нами - завдяки тобі наша сім'я росте!) 😊
  Не найкраще моє фото, але ось так я виглядаю 🙂`);
  await ctx.replyWithPhoto(
    { source: 'src/images/robot.jpg' },
    {
      caption: 'Чат-бот кафедри ІЕПФ ІННІ ім. Ю.М. Потебні ЗНУ',
    }
  );
  await ctx.reply(
    `Якщо ти абітурієнт і у тебе є запитання щодо вступу чи навчання на нашій кафедрі, то тисни "Абітурієнт".
  
  Якщо ти студент і хочеш дізнатися інформацію щодо навчального процесу, то тисни "Студент".
  
  Якщо ти викладач і хочеш бути в курсі подій, то тисни  "Викладач".  
  
  А якщо у тебе є інші запитання чи пропозиції, то тисни на "Залишити анкету" тут чи у головному меню і пиши запитання - ми прочитаємо та відповімо як тільки матимемо змогу.
  `,
  menuButton
  );
  } catch (error) {
    
  }
   
  }