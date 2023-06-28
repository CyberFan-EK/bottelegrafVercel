import { Markup } from "telegraf";
const teacherBD = require('../text/teacher')

interface Teacher {
  id: string,
  name: string,
  foto: string,
  phd: string,
  subject: string,
  konsult: string,
  biograf: string,
  science: string 
}

const buttonTeachArr = teacherBD.map((item: Teacher, index:number, arr: Array<Teacher>) => {
  return [{ text: item.name, callback_data: item.id }];
});

    export const allTeachersButton = {
      reply_markup: {
        inline_keyboard: buttonTeachArr,
      },
};
    
