import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/index';
//     👆 **type-only** import
 
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server an11d their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      async headers(){
        return {
          Authorization:"Bearer shubham"
        }
      }
    }),
  ],
});


async function main() {

  // calling the endpoints
    const response  = await trpc.createTodo.mutate({
        title:"Add new",
        description: "New dist"
    });
    console.log(response)   
    
    const userSignup =  await trpc.signUp.mutate({
      email:"spl.sp@gmail.com",
      password:"qerefssfg"
    })

    console.log(userSignup)

}


main()


