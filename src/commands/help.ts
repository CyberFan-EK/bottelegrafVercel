import { Context } from 'telegraf';
import createDebug from 'debug';


const debug = createDebug('bot:help_command');


export const help = () => async (ctx: Context) => {
    const helpMessage = `
    Перелік знайомих команд
    /start - стартувати бота
    /about - розробники бота
    /help - команди, які я знаю
    /location - де ми знаходимось 
    
    `;
  debug(`Triggered "about" command with message \n${helpMessage}`);
  await ctx.replyWithMarkdownV2(helpMessage, { parse_mode: 'Markdown' });
};

