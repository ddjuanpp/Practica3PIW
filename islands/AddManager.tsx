import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";

export const AddManager: FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [sex, setSex] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [photo, setPhoto] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [error, setError] = useState<string>("");

    const handleSubmit = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
        e.preventDefault();
        const errorMsg: string[] = [];
        if (!name) errorMsg.push("Name is required");
        if (!age) errorMsg.push("Age is required");
        if (!sex) errorMsg.push("Sex is required");
        if (!description) errorMsg.push("Description is required");
        if (hobbies.length === 0) errorMsg.push("Hobbies is required");
        if (!photo) errorMsg.push("Photo is required");
        if (!password) errorMsg.push("Password is required");
    
        if (errorMsg.length > 0) {
          setError(errorMsg.join(", "));
        } else {
          setError("");
          e.currentTarget.submit();
        }
    };

    return (
        <form className="Crear" action="/2_1addPage" method="POST" onSubmit={handleSubmit}>
          <input type="text"    name="name"         placeholder="Name"        value={name}                onInput={(e) => setName(e.currentTarget.value)}/>
          <input type="number"  name="age"          placeholder="Age"         value={age}                 onInput={(e) => setAge(e.currentTarget.value)}/>
          <input type="text"    name="sex"          placeholder="Sex"         value={sex}                 onInput={(e) => setSex(e.currentTarget.value)}/>
          <input type="text"    name="description"  placeholder="Description" value={description}         onInput={(e) => setDescription(e.currentTarget.value)}/>
          <input type="text"    name="hobbies"      placeholder="Hobbies"     value={hobbies.join(",")}   onInput={(e) => setHobbies(e.currentTarget.value.split(","))}/>
          <input type="text"    name="photo"        placeholder="Photo URL"   value={photo}               onInput={(e) => setPhoto(e.currentTarget.value)}/>
          <input type="password"name="password"     placeholder="Password"    value={password}            onInput={(e) => setPassword(e.currentTarget.value)}/>
          <button type="submit">Crear Perfil</button>
          {error && <p>{error}</p>}
        </form>
    );
};