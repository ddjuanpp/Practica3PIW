import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Perfiles } from "../types.ts";
import { Listado } from "../components/Listado.tsx"

type PerfilesData = {
  perfiles: Perfiles[];
};

export const handler: Handlers<PerfilesData> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, PerfilesData>) => {
    try {
      const response = await Axios.get<PerfilesData>('https://lovers.deno.dev/');
      const perfiles = response.data;
      return ctx.render({ perfiles });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = (props: PageProps<PerfilesData>) => {
  return (
      <div class = "TinderMenu">
        <Listado perfiles={props.data.perfiles} />
      </div>
  );
};

export default Page;