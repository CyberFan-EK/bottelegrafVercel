
import { bot } from '../index';


const chatIdUsers: number[] = [];
export const startBot = async () =>  {

    await bot.start(ctx => {
        if (!chatIdUsers.includes(ctx.chat.id)) chatIdUsers.push(ctx.chat.id);
            const inlineKeyboardMarkup = {
            inline_keyboard: [
              [
                { text: 'Почати', callback_data: 'Почати' },
                          ],
            ],
          };
                    // Use the inline keyboard markup when sending a message
          const options = {
            reply_markup: inlineKeyboardMarkup,
          };
                  ctx.reply(
          `Привіт, ${ctx.message.from.first_name}!👋 Я ФінТЕКашнік - чат-бот кафедри Інформаційної економіки, підприємництва та фінансів і я готовий поспілкуватися з тобою) Тисни "Почати" та починай спілкуватись`, options
        );


      });
}