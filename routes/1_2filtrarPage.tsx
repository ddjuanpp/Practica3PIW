import { FreshContext, Handlers } from "$fresh/server.ts";
import { FunctionComponent } from "preact";
import axios from "npm:axios";
import { Perfiles } from "../types.ts";
import FilterManager from "../islands/FilterManager.tsx";

type PerfilData = {
  perfiles: Perfiles[];
};

export const handler: Handlers<unknown> = {
  POST: async (_req: Request, ctx: FreshContext<unknown, unknown>) => {
    const u = new URL(ctx.url);
    const perfil = u.searchParams.get("name");
    

    const response = await axios.get<PerfilData>(`https://lovers.deno.dev/${perfil}`);
    if (response.status !== 200) {
      console.error("Error fetching perfil");
      throw new Error("Error fetching perfil");
    }

    return ctx.render(response.data);
  },
};

const Home: FunctionComponent<PerfilData> = ({ perfiles }) => {
    return (
      <FilterManager perfiles={perfiles} />
    );
}

export default Home;