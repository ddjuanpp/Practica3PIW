import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Perfiles } from "../types.ts";
import FilterManager from "../islands/FilterManager.tsx";

type PerfilData = {
  perfiles: Perfiles[];
};

export const handler: Handlers<unknown> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, unknown>) => {
    

    const response = await axios.get<PerfilData>(`https://lovers.deno.dev/`);
    if (response.status !== 200) {
      console.error("Error fetching perfil");
      throw new Error("Error fetching perfil");
    }

    return ctx.render({perfiles: response.data});
  },
};

export function Home(props: PageProps<PerfilData>) {
  const perfiless = props.data.perfiles
  return (
    <FilterManager perfiles={perfiless} />
  );
}

export default Home;