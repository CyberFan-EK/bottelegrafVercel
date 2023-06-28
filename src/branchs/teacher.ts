import { Telegraf,Scenes } from "telegraf";
import { teacherButton } from "../buttons/teacherButton";
import { backTeacherButton } from "../buttons/backTeacherButton";
import { allTeachersButton } from "../buttons/allTeachersButton";
const teacherBD = require('../text/teacher')
const words = require('../text/words')
interface Teacher {
    id: string,
    name: string,
    foto: string,
    phd: string,
    subject: [string],
    konsult: string,
    biograf: string,
    science: string 
}


export const teacherBranch = (bot: Telegraf<Scenes.SceneContext>) => {
    bot.hears(words.wordTeachers, async (ctx) => {
        let name = '';
        let surname = '';
        if (ctx.from.first_name) name = ctx.from.first_name;
        if (ctx.from.last_name) surname = ctx.from.last_name;
        
        await ctx.reply(`Привіт, ${name} ${surname}!👋`);
        await ctx.reply(
          `Кафедру інформаційної економіки, підприємництва та фінансів створено у 2020 р. на базі трьох кафедр – економіки та інформаційних технологій; фінансів, банківської справи та страхування; економіки підприємства з метою подальшої модернізації освітніх програм у напряму Євроінтеграції та розвитку міжнародної діяльності`
        );
        await ctx.reply(
          `Сьогодні кафедра інформаційної економіки, підприємництва та фінансів – сучасний колектив висококваліфікованих фахівців, який об’єднує 5 доктори наук, 11 кандидатів наук, викладача – філолога, старшого лаборанта (викладача – філолога); залучає до освітнього процесу стейкхолдерів – професіоналів, докторів та кандидатів наук.`,
          teacherButton
        );
      });
    
      bot.hears(words.wordZavKaf, async (ctx) => {
      
        await ctx.reply(
          `Шапуров Олександр Олександрович
      доктор економічних наук, професор`
        );
        await ctx.replyWithPhoto({ source: 'src/images/teacher/shapurov.jpg' });
        await ctx.reply(
          `Адреса: 69006, м. Запоріжжя, просп. Соборний, 226 (10 корп., к. Л413)
Tел.: (096) 177-94-00
E-mail: 0961779400saa@gmail.com`,
      backTeacherButton
        );
      });
    
      bot.hears(words.wordTeacher, async (ctx) => {
       
        await ctx.reply('Співробітники кафедри:', allTeachersButton);
  await ctx.reply(`Адреса: 69006, м. Запоріжжя, просп. Соборний, 226`, teacherButton);
      });
       
      teacherBD.forEach((teach: Teacher) => {
        bot.action(teach.id, async (ctx) => {
         
    
          const listSubjects = teach.subject.join(',\n ');
    
          await ctx.reply(
            `${teach.name} 
      ${teach.phd}`
          );
          await ctx.replyWithPhoto({ source: teach.foto });
          await ctx.reply(`Основні дисципліни:\n ${listSubjects}`);
          await ctx.reply(`Часи консультації: \n ${teach.konsult}`);
          await ctx.reply(`Біографія: \n ${teach.biograf}`, backTeacherButton);
          await ctx.reply(`Наукові інтереси:\n ${teach.science}`, backTeacherButton);
        });
      });
      
    
  

}