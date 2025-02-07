import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const appRouter = router({
  signUp: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = await opts;
      const token = "12345";
      return {
        input,
        token,
      };
    }),
  createTodo: publicProcedure
    .input(
      z.object({
        title: z.string(),
        desc: z.string(),
      })
    )
    .mutation(async (opts) => {
      const authHeader = opts.ctx.username;
      console.log(authHeader);
      const { input } = await opts;
      return {
        input,
      };
    }),
});

const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers["authorization"];
    console.log(authHeader);
    return {
      username: "1234",
    };
  },
});

server.listen(3000);

export type AppRouter = typeof appRouter;
