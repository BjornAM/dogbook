import { useState } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { useDogs } from "../components/DogContext";

export const CreatePage = () => {
  const { addDog } = useDogs();

  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const add = async () => {
    await addDog({
      name,
      id: shortid(),
    });
    setDone(true);
    setName("");
    let timeout = setTimeout(() => {
      setDone(false);
    }, 3000);
  };
  return (
    <>
      <Link to="/">Go back</Link>
      <h1>Add new dog</h1>
      <input
        placeholder="Skriv hundens namn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        <button onClick={add}>Save</button>
      </p>
      {done && <span style={{ color: "green" }}>Sparad!</span>}
    </>
  );
};
