import { router} from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { userRouter } from "./routers/user.router";
import { todoRouter } from "./routers/todo.router";
import { User } from "../db/user";
import { Todo } from "../db/todo";
import mongoose from "mongoose";

export const appRouter = router({
  user: userRouter,
  todo: todoRouter,
});

mongoose.connect("diasidaisjf");
export type AppRouter = typeof appRouter;



const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers["authorization"];
    if (authHeader) {
      const tr = authHeader.split(" ")[1];
      return new Promise<{ db: { User: typeof User, Todo: typeof Todo }, token?: string }>((resolve) => {
        resolve({ db: { User, Todo }, token: tr });
      });
    } else {
      return {
        db:{User,Todo},
        token: "1234",
      };
    }
  },
});

server.listen(3000);
