import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const appRouter = router({
  createTodo: publicProcedure
    .input(
      z.object({
        title: z.string(),
        des: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      return input;
    }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;
