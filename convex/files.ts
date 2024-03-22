import { v } from 'convex/values';
import {mutation} from './_generated/server';
export const createfile=mutation({
    args:{
        name:v.string()
    },
   async handler(ctx,args){
    await ctx.db.insert('files',{
        name:args.name
    })
   }
})