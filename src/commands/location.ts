import { Context } from 'telegraf';
import createDebug from 'debug';
import { bot } from '../index';
const debug = createDebug('bot:location_command');

export const location = ()=> async ( ctx: Context) =>{
   
    debug(`Triggered "location" command with message `);
    const localId = ctx.chat?.id
    if (localId) {
        bot.telegram.sendLocation(localId, 47.8606, 35.102017);
    }
 
    await ctx.reply(`Адреса: 69006, м. Запоріжжя, просп. Соборний, 226`);
  
//   await ctx.replyWithMarkdownV2(helpMessage, { parse_mode: 'Markdown' });
};
