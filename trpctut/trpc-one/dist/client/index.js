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
const client_1 = require("@trpc/client");
const trpc = (0, client_1.createTRPCProxyClient)({
    links: [
        (0, client_1.httpBatchLink)({
            url: "http://localhost:3000",
            headers() {
                return __awaiter(this, void 0, void 0, function* () {
                    return {
                        Authorization: "Bearer 123"
                    };
                });
            }
        }),
    ],
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield trpc.createTodo.mutate({
            title: "sample",
            desc: "sample des",
        });
        console.log(response);
        // const response = await trpc.signUp.mutate({
        //   username: "spl@gmail.com ",
        //   password: "shubham",
        // });
        console.log(response);
    });
}
main();
