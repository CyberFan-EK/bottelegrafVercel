import { Telegraf, Scenes } from "telegraf";
import { studentButton } from "../buttons/studentButton";
const words = require('../text/words')
export const studentsBranch = (bot: Telegraf<Scenes.SceneContext>) => {
    bot.hears(words.wordStudent, async (ctx) => {
        let name = '';
        let surname = '';
        if (ctx.from.first_name) name = ctx.from.first_name;
        if (ctx.from.last_name) surname = ctx.from.last_name;
        ctx.reply(`Привіт, студенте ${name} ${surname}!👋`);
        ctx.reply(`Що тебе цікавить?`);
        await ctx.replyWithPhoto(
          { source: 'src/images/ep.jpg' },
    
          studentButton
        );
      });

    bot.hears(words.wordGrafic, async (ctx) => {
     
        await ctx.replyWithPhoto({ source: 'src/images/online-learning-yes.jpg' });
        ctx.replyWithHTML(
          `Денна форма навчання:
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">Графік освітнього процесу 2022-2023 </a>
      
      Заочна форма навчання:
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">Графік освітнього процесу 2022-2023 </a>
            `,
            studentButton
        );
      });

    bot.hears(words.wordTimeTable, async (ctx) => {
   
        await ctx.replyWithPhoto({ source: 'src/images/timetable.png' });
        ctx.replyWithHTML(
          `Денна форма:
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">1 курс</a>
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">3 курс </a>
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">2 курс </a>
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">4 курс </a>
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">Магістри 1 курс </a>
      Заочна форма:
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">1 курс</a>
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">2 курс </a>
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">3 курс </a>
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">4 курс </a>    
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">5 курс </a>    
      ✅ <a href="https://www.znu.edu.ua/ukr/university/11929/12619">Магістри 1 курс </a>    
      `,
      studentButton
        );
      });

    bot.hears(words.wordNews, async (ctx) => {
             await ctx.replyWithPhoto({ source: 'src/images/student.jpg' });
        ctx.replyWithHTML(
          `
          Останні новини Ви завжди можете прочитати на нашому сайті 
        ✅ <a href="https://znuiepf.com.ua/">Новини кафедри ІЕПФ </a>
                
      Надходять канікули, тому бажаємо успішної сесії, студенте 😉    
      `,
      studentButton
        );
      });

}