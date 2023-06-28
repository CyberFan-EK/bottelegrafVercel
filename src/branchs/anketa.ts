import { Context, Scenes, session, Telegraf } from "telegraf";

import { menuButton } from "../buttons/menuButton";
const words = require('../text/words')
import { exitButton } from "../buttons/exitButton";
import { phoneButton } from "../buttons/phoneButton";

const { enter, leave } = Scenes.Stage;
const sendQuestion = require('../actions/sendQuestion')

let userName: string, phoneUser: string, questionUser: string
 
export const anketaBranch = (bot: Telegraf<Scenes.SceneContext>) => {

  const greeterScene = new Scenes.BaseScene<Scenes.SceneContext>("greeter");
  greeterScene.enter(async ctx => {

    await ctx.reply(
              `Якщо у Вас залишилися запитання Ви можете залишити свої контакти з питанням в цій анкеті і наші викладачі з Вами зв'яжуться`
          );
          await ctx.reply(`Введіть Ваші особисті дані (Прізвище, ім'я абітурієнта): `, exitButton);
  });
  // greeterScene.leave(ctx => ctx.reply("Bye"));
  greeterScene.hears("hi", enter<Scenes.SceneContext>("greeter"));
  greeterScene.on("text", async ctx => {
    userName = ctx.message?.text;
    if (userName && ctx.message.text !== '⬅️ Вихід' && ctx.message.text!=='📑 Залишити анкету') {
      await ctx.reply(`Дякуємо ${userName} ми зберегли в анкеті Ваше імя`);
      leave<Scenes.SceneContext>()
   
      ctx.scene.enter('phone')
     
    } else {
      leave<Scenes.SceneContext>()
      getStartMenu(ctx)
    }
  });



  const phoneScene = new Scenes.BaseScene<Scenes.SceneContext>("phone");
  phoneScene.enter(async ctx => {

    await ctx.reply('Відправьте Ваш номер телефону', phoneButton);
    phoneScene.on('message', async ctx => {
    
      if (ctx.message && 'contact' in ctx.message) {
  
        const phoneNumber = ctx.message.contact;
        if (phoneNumber && 'phone_number' in phoneNumber) {
          phoneUser = ctx.message.contact.phone_number
ctx.scene.enter('question')
        } else {
          leave<Scenes.SceneContext>()
               await getStartMenu(ctx)
        }
      } else {
        leave<Scenes.SceneContext>()
            await getStartMenu(ctx)
      }
    }
      )



  });
  
// phoneScene.leave(ctx => ctx.reply("exiting echo scene"));
phoneScene.command("back", leave<Scenes.SceneContext>());
// phoneScene.on("text", ctx => ctx.reply(ctx.message.text));
  // phoneScene.on("message", ctx => ctx.reply("Only text messages please"));
  
  const questionScene = new Scenes.BaseScene<Scenes.SceneContext>("question");
  questionScene.enter(async ctx => {
    await ctx.reply(`Залиште Ваше запитання:`, exitButton);

    questionScene.on('text', async ctx => {
               
      if (ctx.message.text) {
        questionUser = ctx.message.text;
        leave<Scenes.SceneContext>()
        await ctx.reply(
          'Дякуємо за ваш запит, через деякий час Вам нададуть відповідь або зателефонують.',
          menuButton
        );
                        
        sendQuestion(userName, phoneUser, questionUser);
       
      }
    }
    
      )



  });


  const stage = new Scenes.Stage<Scenes.SceneContext>([greeterScene, phoneScene,questionScene], {
    ttl: 10,
  });
  bot.use(session());
  bot.use(stage.middleware());
  bot.command("greeter", ctx => ctx.scene.enter("greeter"));
  bot.command("phone", ctx => ctx.scene.enter("phone"));
  

  const getStartMenu = async (ctx: Context) => {
    await ctx.reply(
      `Якщо ти абітурієнт і у тебе є запитання щодо вступу чи навчання на нашій кафедрі, то тисни "Абітурієнт".
    
    Якщо ти студент і хочеш дізнатися інформацію щодо навчального процесу, то тисни "Студент".
    
    Якщо ти викладач і хочеш бути в курсі подій, то тисни  "Викладач".  
    
    А якщо у тебе є інші запитання чи пропозиції, то тисни на "Залишити анкету" тут чи у головному меню і пиши запитання - ми прочитаємо та відповімо як тільки матимемо змогу.
    `,
    menuButton
    );
}





  bot.hears(words.wordQuestionnaire, (ctx) => ctx.scene.enter('greeter'));
  stage.hears('⬅️ Вихід', (ctx) => {
    ctx.scene.leave();
    getStartMenu(ctx);
  });




  
}