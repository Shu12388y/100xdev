import { TRPCError } from "@trpc/server";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";
import { isLoggedIn } from "../middlewares/middleware";

export const userRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async (opts) => {
      opts.ctx.db.User.insertMany({
        username: opts.input.username,
        password: opts.input.password,
      });
      return {
        token: "12334",
      };
    }),
  login: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = await opts;
      return {
        input,
        token: "123",
      };
    }),
  me: publicProcedure
    .output(
      z.object({
        email: z.string(),
      })
    )
    .use(isLoggedIn)   // middleware
    .query(async (opts) => {
      let response = await opts.ctx.db.User.findById(opts.ctx.token);
      if (!response) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      return {
        email: response.username || "",
      };
    }),
});
