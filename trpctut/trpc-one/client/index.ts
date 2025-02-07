import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
      async headers(){
        return{
          Authorization:"Bearer 123"
        }

      }
    }),
   
  ],
});

async function main() {
  const response = await trpc.createTodo.mutate({
    title: "sample",
    desc: "sample des",
  });
  console.log(response)
  // const response = await trpc.signUp.mutate({
  //   username: "spl@gmail.com ",
  //   password: "shubham",
  // });
  // console.log(response);
}

main();
