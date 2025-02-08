import { initTRPC } from "@trpc/server";
import { User } from "../db/user";
import { Todo } from "../db/todo";
export const t = initTRPC
  .context<{ db: { Todo: typeof Todo; User: typeof User }; token?: string }>()
  .create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;
