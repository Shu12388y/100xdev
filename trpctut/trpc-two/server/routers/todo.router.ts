import { router,publicProcedure } from "../trpc";
import {z} from "zod"

export const todoRouter = router({
    createTodo:publicProcedure.input(z.object({
        title:z.string(),
        description:z.string(),
        userId:z.string()
    })).mutation(async(opts)=>{
        const {input} =  await opts;
        return{
            input
        }
    })
})