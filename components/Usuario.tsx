import { FunctionComponent } from "preact";
import { Perfiles } from "../types.ts";


export const Usuario: FunctionComponent<Perfiles> = ( props: Perfiles ) => {
  const {name, photo, age, sex, description, hobbies, comments} = props;
  return (
    <div class="Perfil-Card">
        <h1>{name}</h1>
        <img className="Perfil-image" src={photo} alt={name} />
        <h2>Edad:</h2>
        <p>{age}</p>
        <h2>Sexo:</h2>
        <p>{sex}</p>
        <h2>Descripción:</h2>
        <p>{description}</p>
        <h2>Hobbies:</h2>
        <p>
          {hobbies.length>0 && (hobbies.map(h => <ul>{h}</ul>))}
        </p>
        <h2>Comentarios:</h2>
        <p>
          {Array.isArray(comments) && comments.length > 0 && comments.map(c => <ul>{c.user}: {c.message}</ul>)}
        </p>
    </div>
  );
};

export default Usuario;