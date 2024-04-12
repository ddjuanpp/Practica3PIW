import { FunctionComponent } from "preact";
import { Perfiles } from "../types.ts";

type PerfilesData = {
  perfiles: Perfiles[];
};

export const Listado: FunctionComponent<PerfilesData> = ({ perfiles }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        {perfiles.map(perfil => (
          <a href={`/${perfil.name}`} className="Perfil-Card" key={perfil.name}>
            <h1>{perfil.name}</h1>
            <img className="Perfil-image" src={perfil.photo} alt={perfil.name} />
            <h2>Edad:</h2><p> {perfil.age + '.'} </p><h2>Sexo:</h2><p>{perfil.sex + '.'}</p>
          </a>
        ))}
    </div>
  );
};