import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Perfiles } from "../types.ts";
import axios from "npm:axios";
import Usuario from "../components/Usuario.tsx";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Perfiles>) {
    const name = ctx.params.name;
    try {
      const response = await axios.get(`https://lovers.deno.dev/${name}`);
      if (response.status !== 200) {
        throw new Response("Error fetching data", { status: response.status });
      }
      return ctx.render(response.data);

    } catch (error) {
      throw new Response(error.message, { status: 500 });
    }
  },
};

export default function perfilPropio(props: PageProps<Perfiles>) {
  const perfil: Perfiles = props.data;
  return (
        <Usuario {...perfil} />
  );
}