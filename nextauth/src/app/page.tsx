"use client";
import { useSession,SessionProvider,signOut,signIn } from "next-auth/react";



export default function Page() {
  return (
    <SessionProvider>
      <Main />
    </SessionProvider>
  );
}

function Main() {
  const session = useSession();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {session.status == "authenticated" ? <button onClick={()=>signOut()}>Logout</button> : <button onClick={()=>signIn()}>Sign In</button>}
    </div>
  );
}
