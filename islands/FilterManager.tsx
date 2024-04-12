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

const FilterManager: FunctionComponent<PerfilData> = ({ perfiles }) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState<string>("");
  const [hobbies, setHobbies] = useState<string>("");
  const [filter, setFilter] = useState<Busqueda>({name: "",age: 0,sex: "",hobbies: ""});

  const hobbiesFiltro = filter.hobbies.split(", ").map((h) => h.trim()).filter((ho) => ho !== "");

  const perfilFiltro = perfiles.filter((p) => {
    const Name = filter.name === "" || p.name === filter.name;
    const Age = filter.age === 0 || p.age === filter.age;
    const Sex = filter.sex === "" || p.sex === filter.sex;
    const Hobbies = hobbiesFiltro.length === 0 || hobbiesFiltro.every((h) => p.hobbies.includes(h));

    return Name && Age && Sex && Hobbies;
  });

  return (
    <>
      <div class="Filtrar">
        <input type="text"   name="name"    placeholder="Name"    value={name}    onBlur={(e) => setName(e.currentTarget.value)}/>
        <input type="number" name="age"     placeholder="Age"     value={age}     onBlur={(e) => setAge(parseInt(e.currentTarget.value))}/>
        <input type="text"   name="sex"     placeholder="Sex"     value={sex}     onBlur={(e) => setSex(e.currentTarget.value)}/>
        <input type="text"   name="hobbies" placeholder="Hobbies" value={hobbies} onBlur={(e) => setHobbies(e.currentTarget.value)}/>
        <button onClick={() => setFilter({ name, age, sex, hobbies })}>
          Filter
        </button>
      </div>
      <div class="">
        {perfilFiltro.map((p) => (
          <Usuario {...p} />
        ))}
      </div>
    </>
  );
};

export default FilterManager;