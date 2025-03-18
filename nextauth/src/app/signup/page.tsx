import React from "react";

async function Page() {
  return (
    <div>
      <form
        action={async (formData: FormData) => {
          "use server";
          const name = await formData.get("username");
          const email = await formData.get("name");
          const password = await formData.get("password");
          console.log(name, email, password);
          // redirect("/login");
        }}
      >
        <input type="text" name="username" />
        <input type="email" name="emai" />
        <input type="password" name="password" />
        <button>SignUp</button>
      </form>
    </div>
  );
}

export default Page;
