import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { AddManager } from "../islands/AddManager.tsx";

export const handler: Handlers= {
    POST: async (req: Request, ctx: FreshContext<unknown, string>) => {
      
        const data = await req.formData();
        const name = data.get("name");
        const password = data.get("password");
        const age = parseInt(data.get("age"));
        const sex = data.get("sex");
        const description = data.get("description");
        const hobbies = data.get("hobbies").split(",").map((hobby: string) => hobby.trim());
        const photo = data.get("photo");

        const newPerfil = { 
            name: name,
            password: password,
            age: age,
            sex: sex,
            description: description,
            hobbies: hobbies,
            photo: photo,
            comments: []
        };

        const response = await axios.post("https://lovers.deno.dev/", newPerfil);
        
        if (!response) {
            return new Response("Error adding profile", { status: 500 });
        }
    
        return ctx.render("New profile added")
    },
  };

const Page = (props: PageProps<unknown>) => {
    return (
        <AddManager/>
    )
};

export default Page;