"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("./trpc");
const zod_1 = require("zod");
const standalone_1 = require("@trpc/server/adapters/standalone");
const todoInputType = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string()
});
const appRouter = (0, trpc_1.router)({
    createTodo: trpc_1.publicProcedure
        .input(todoInputType)
        .mutation((opt) => __awaiter(void 0, void 0, void 0, function* () {
        const title = opt.input.title;
        const description = opt.input.description;
        //  database call
        return {
            data: "Added"
        };
    })),
    signUp: trpc_1.publicProcedure
        .input(zod_1.z.object({
        email: zod_1.z.string(),
        password: zod_1.z.string()
    }))
        .mutation((opt) => __awaiter(void 0, void 0, void 0, function* () {
        const username = opt.ctx.token;
        const email = opt.input.email;
        const password = opt.input.password;
        // do validation
        // database query
        // create jwt
    }))
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
    createContext(opts) {
        let authHeader = opts.req.headers["authorization"];
        console.log(authHeader);
        return {
            token: "1234"
        };
    }
});
server.listen(3000);
