import { router,publicProcedure } from "./trpc";
import {z} from "zod";
import { createHTTPServer } from '@trpc/server/adapters/standalone';



const todoInputType = z.object({
    title:z.string(),
    description:z.string()
})



const appRouter =  router({
    createTodo:publicProcedure
    .input(todoInputType)
    .mutation(async(opt)=>{
        const title = opt.input.title;
        const description = opt.input.description;
        //  database call
        return {
            data:"Added"
        }
    }),
    signUp:publicProcedure
        .input(z.object({
            email:z.string(),
            password:z.string()
        }))
        .mutation(async(opt)=>{
            const username = opt.ctx.token;
            const email = opt.input.email;
            const password = opt.input.password;


            // do validation
            // database query
            // create jwt

            
        })

        
})




const server = createHTTPServer({
    router: appRouter,
    createContext(opts){
        let authHeader = opts.req.headers["authorization"]
        console.log(authHeader)
        return{
            token:"1234"
        }
    }
});

server.listen(3000);


export type AppRouter = typeof appRouter;