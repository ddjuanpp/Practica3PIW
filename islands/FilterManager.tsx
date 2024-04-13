import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { Perfiles } from "../types.ts";
import Usuario from "../components/Usuario.tsx";

type PerfilData = {
  perfiles: Perfiles[];
};

type Busqueda = {
  name: string;
  age: number;
  sex: string;
  hobbies: string;
};

const FilterManager: FunctionComponent<PerfilData> = ( props ) => {
  const { perfiles } = props;
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState<string>("");
  const [hobbies, setHobbies] = useState<string>("");
  const [perfilesFiltrados, setPerfilesFiltrados] = useState<Perfiles[]>(perfiles);

  const handleFilter = () => {
    const hobbiesFiltro = hobbies.split(", ").map((h) => h.trim()).filter((ho) => ho !== "");

    const perfilFiltro = perfiles ? perfiles.filter((p) => {
      const Name = name === "" || p.name.includes(name);
      const Age = age === 0 || p.age === age;
      const Sex = sex === "" || p.sex === sex;
      const Hobbies = hobbiesFiltro.length === 0 || hobbiesFiltro.every((h) => p.hobbies.includes(h));

      return Name && Age && Sex && Hobbies;
    }) : [];

    setPerfilesFiltrados(perfilFiltro);

  };

  return (
    <>
      <div class="Filtrar" action="/1_2filtrarPage" method="GET">
        <input type="text"   name="name"    placeholder="Name"    value={name}    onBlur={(e) => setName(e.currentTarget.value)}/>
        <input type="number" name="age"     placeholder="Age"     value={age}     onBlur={(e) => setAge(parseInt(e.currentTarget.value))}/>
        <input type="text"   name="sex"     placeholder="Sex"     value={sex}     onBlur={(e) => setSex(e.currentTarget.value)}/>
        <input type="text"   name="hobbies" placeholder="Hobbies" value={hobbies} onBlur={(e) => setHobbies(e.currentTarget.value)}/>
        <button onClick={handleFilter}>
          Filter
        </button>
      </div>
      <div class="">
        {perfilesFiltrados ? perfilesFiltrados.map((p) => (
          <Usuario {...p} /> 
        )): "No hay perfiles que mostrar"}
      </div>
    </>
  );
};

export default FilterManager;