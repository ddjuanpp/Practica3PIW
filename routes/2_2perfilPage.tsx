import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { LoginManager } from "../islands/LoginManager.tsx";

export const handler: Handlers= {
    POST: async (req: Request, ctx: FreshContext<unknown, string>) => {
      
        const data = await req.formData();
        const name = data.get("name");
        const password = data.get("password");

        const response = await axios.post("https://lovers.deno.dev/login", { name: name, password: password });
        
        if (!response) {
            return new Response("Error login profile", { status: 500 });
        }
    
        return ctx.render("Login done")
    },
  };

const Page = (props: PageProps<unknown>) => {
    return (
        <LoginManager/>
    )
};

export default Page;