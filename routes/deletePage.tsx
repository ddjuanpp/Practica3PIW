import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { DeleteManager } from "../islands/DeleteManager.tsx";

export const handler: Handlers= {
  POST: async (req: Request, ctx: FreshContext<unknown, string>) => {
    
    const data = await req.formData();

    const name = data.get("name");
    const password = data.get("password");
    
    const response = await fetch(`https://lovers.deno.dev/${name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password: password })
    });
      
    if (!response) {
      return new Response("Error deleting profile", { status: 500 });
    }
    return ctx.render("Perfil deleted")
  }
};

const Page = (props: PageProps<unknown>) => {

  return (
      <DeleteManager />
  )
}

export default Page;