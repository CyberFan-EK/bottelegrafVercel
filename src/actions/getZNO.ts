
import { Context} from "telegraf";
import { specialtyButton } from "../buttons/specialtyButton";
import { enrolleButton } from "../buttons/enrolleButton";


export const getZNO = () => async (ctx: Context) => {
    const message = ctx.message;
let button = specialtyButton
    if (message && 'text' in message) {
        const text = message.text;
        if ( text === '😪🅱️✔ Необхідні ЗНО') {
            console.log('Yes');
            button = enrolleButton     
        } else {
            
            await ctx.reply('Here is the ZNO button:', {
                reply_markup: {
                  inline_keyboard: [[{ text: 'ZNO Button', callback_data: 'zno' }]],
                },
              });

          }
    }
      
        
    await ctx.reply(
      `🅱️ Бакалавр: 
      Для вступу на нашу кафедру (спеціальності 051, 072 та 076) використовується такий перелік ЗНО:
✅ Українська мова та література - коефіцієнт = 0.3,
✅ Математика - коефіцієнт = 0.3,
✅ Історія України або Іноземна мова, або Біологія, або Географія, або Фізика, або Хімія - коефіцієнт = 0.3
🅱️ Вступ на третій курс для осіб, що мають диплом молодшого спеціаліста:
За результатами ЗНО (українська мова та література), за результатами фахового іспиту;
`);
   await     ctx.reply(
    `🅱️ Магістр: 
✅ Єдиний вступний іспит (ЄВІ) з іноземної мови,
✅ Фахове вступне випробування,
✅ Додаткове вступне випробування (для неспоріднених спеціальностей);
`,
button
  );
  }