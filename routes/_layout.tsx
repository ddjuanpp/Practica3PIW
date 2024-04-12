import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
    return (
        <div class="layout">
            <title>LoveTinder</title>
            <div class="header1">
                <a href="/1_1perfilesPage">Usuarios</a>
                <a href="/1_2filtrarPage">Buscar Usuarios</a>
            </div>
            <div class="header2">
                <a href="/2_1addPage">Crear Perfil</a>
                <a href="/2_2perfilPage">Perfil</a>
            </div>
            <div class="header3">
                <a href="/deletePage">Eliminar Perfil</a>
            </div>
            <Component />
        </div>
    );
}