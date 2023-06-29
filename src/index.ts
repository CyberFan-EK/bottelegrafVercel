import  {Telegraf, Context, Scenes} from 'telegraf';

import { about } from './commands/about';
import { help } from './commands/help';
import { location } from './commands/location';

import { welcomeBot } from './actions/welcomeBot';
import { getZNO } from './actions/getZNO';
import { getLearn } from './actions/getLearn';
import { getFoto } from './actions/getFoto';




import { VercelRequest, VercelResponse } from '@vercel/node';
import { development, production } from './core';

import { startBot } from './branchs/startBot';
import { enrolletBranch } from './branchs/enrolle';
import { studentsBranch } from './branchs/students';
import { teacherBranch } from './branchs/teacher';
import { anketaBranch } from './branchs/anketa';

const words = require('./text/words')

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const ENVIRONMENT = process.env.NODE_ENV || '';



export const bot = new Telegraf<Scenes.SceneContext>(BOT_TOKEN);

// Create all commman in bot

bot.command('about', about());
bot.command('help', help())
bot.command('location', location())


// Start messages from ChatBot for all users
 startBot();

// bot.on('message', greeting());

// Actions when user click HTML button Почати and  Меню ....
bot.action(['Почати', 'Меню'], welcomeBot());
bot.action(['ЗНО'], getZNO());
bot.action(['Як навчатись'], getLearn());
bot.action(['Так'], getLearn());
bot.action(['Фото'], getFoto());


// If user put some words, we listening it and show info
bot.hears(words.wordsStartMenu, welcomeBot());
bot.hears(words.wordsZNO, getZNO());


// Start lisinig a branchs
// Прослушка веток Для абитуриентов, students and teacher

// enrolletBranch(bot);
// studentsBranch(bot)
// teacherBranch(bot)
// anketaBranch(bot)




//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot);
};
//dev mode
ENVIRONMENT !== 'production' && development(bot);


