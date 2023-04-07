import { useDogs } from "./DogContext";
import { Link } from "react-router-dom";

export const ListDogs = () => {
  //Importerar context-hook useDogs och hämtar 2 funktioner
  const { dogs, removeDog } = useDogs();
  return (
    //Parametern d=dogs?
    //Dubbelkolla vad .map gör.
    //Styla i css-fil
    <>
      {dogs.map((d) => (
        <div
          key={d.id}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Link to={`/profile/${d.id}`}>
            <div>
              <b
                style={{
                  color: d.status === "home" ? "green" : "red",
                }}
              >
                {d.name}
              </b>
            </div>
          </Link>
          <button
            onClick={() => removeDog(d)}
            style={{
              background: "red",
            }}
          >
            remove
          </button>
        </div>
      ))}
    </>
  );
};
