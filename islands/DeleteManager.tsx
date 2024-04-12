import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";

export const DeleteManager: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleDelete = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const errorMsg: string[] = [];
    if (!name) errorMsg.push("Name is required");
    if (!password) errorMsg.push("Creator is required");

    if (errorMsg.length > 0) {
      setError(errorMsg.join(", "));
    } else {
      setError("");
      e.currentTarget.submit();
    }
  };

  return (
    <form className="Delete" action="/deletePage" method="POST" onSubmit={handleDelete}>
      <input type="text" name="name" placeholder="Name" value={name} onInput={(e) => setName(e.currentTarget.value)} />
      <input type="password" name="password" placeholder="Password" value={password} onInput={(e) => setPassword(e.currentTarget.value)} />
      <button type="submit">Delete Perfil</button>
      {error && <p>{error}</p>}
    </form>
  );
};