
import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import {actionButton} from '../buttons/actionButton'

export const getFoto= ()=> async (ctx: Context<Update>)=> {

         try {
            await ctx.replyWithPhoto({ source: 'src/images/fotoactive/keis.jpg' });
            await ctx.replyWithPhoto({ source: 'src/images/fotoactive/miss.jpg' });
            await ctx.replyWithPhoto({ source: 'src/images/fotoactive/prof.jpg' });
            await ctx.replyWithPhoto({ source: 'src/images/fotoactive/prik1.jpg' });
            await ctx.replyWithPhoto({ source: 'src/images/fotoactive/prik2.jpg' });
            await ctx.replyWithPhoto({ source: 'src/images/fotoactive/prik3.jpg' }, actionButton);
        
         } catch (error) {
            
         }

        }



