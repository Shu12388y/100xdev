import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

async function main() {
  const response = await trpc.createTodo.mutate({
    title: "sample",
    des: "sample des",
  });
  console.log(response)
}

main()
