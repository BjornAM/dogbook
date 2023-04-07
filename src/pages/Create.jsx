import { useState } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { useDogs } from "../components/DogContext";

export const CreatePage = () => {
  // Vi importerar useDogs och hämtar hunden från webbläsaren med addDog-funktionen.
  const { addDog } = useDogs();
  //name = inmatat namn på ny hund
  //done = används för att visa meddelande om att hunden har sparats
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  // add = funktion för att lägga till en ny hund. Hur påverkar async await? Vad väntar på vad?
  // När användaren trycker på spara-knappen kallas denna funktion.
  // Hur skapades addDog? addDog tar 2 argument name och id: shortid()
  // Hur kopplas setDone(true) till aviseringen "Sparad!" ?
  // Sen sätts setDone(false) i en timeout med fördröjning 3000ms
  // LÄGGA TILL ATT DET INTE GÅR ATT SPARA OM INGET ÄR SKRIVET I INPUT.
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
      <Link to="/">Tillbaka</Link>
      <h1>Lägg till ny hund</h1>
      <input
        placeholder="Skriv hundens namn"
        value={name}
        onChange={(e) => setName(e.target.value)} //Uppdaterar värdet i state när användaren skriver i input-fältet.
      />
      <p>
        <button onClick={add}>Spara</button>
      </p>
      {done && <span style={{ color: "green" }}>Sparad!</span>}
    </>
  );
};
