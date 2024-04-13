import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";
import { Usuario } from "../components/Usuario.tsx";
import { Perfiles } from "../types.ts";

export const LoginManager: FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [login, setLogin] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [perfil, setPerfil] = useState<Perfiles>();

    const handleLogin = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
        e.preventDefault();
        const errorMsg: string[] = [];
        if (!name) errorMsg.push("Name is required");
        if (!password) errorMsg.push("Password is required");
        if (errorMsg.length > 0) {
          setError(errorMsg.join(", "));
        } else {
          setError("");
          setLogin(true);
          e.currentTarget.submit();
        }
    };

    const handleAddcomment = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
        e.preventDefault();
        const errorMsg: string[] = [];
        if (!name) errorMsg.push("Name is required");
        if (!comment) errorMsg.push("Comment is required");
        if (errorMsg.length > 0) {
          setError(errorMsg.join(", "));
        } else {
          setError("");
          e.currentTarget.submit();
        }
    }

    const handleDeletecomment = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
        e.preventDefault();
        const errorMsg: string[] = [];
        if (!name) errorMsg.push("Name is required");
        if (errorMsg.length > 0) {
          setError(errorMsg.join(", "));
        } else {
          setError("");
          e.currentTarget.submit();
        }
    }
    

    return (
        <>
            <form className="Login" action="/2_2perfilPage" method="POST" onSubmit={handleLogin}>
                <input type="text"      name="name"     placeholder="Name"      value={name}     onInput={(e) => setName(e.currentTarget.value)}/>
                <input type="password"  name="password" placeholder="Password"  value={password} onInput={(e) => setPassword(e.currentTarget.value)}/>
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </>
    );
};