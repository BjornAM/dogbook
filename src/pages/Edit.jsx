import { useDogs } from "../components/DogContext";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FriendSelector } from "../components/FriendSelector";
import { FriendsList } from "../components/FriendsLists";

export const Edit = () => {
  const { id } = useParams();
  const { currentDog, updateDog, dogs, setDogById } = useDogs();

  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (dogs.length < 1) return;
    setDogById(id);
  }, [id, dogs]);

  useEffect(() => {
    setNickname(currentDog?.nickname || "");
    setDescription(currentDog?.description || "");
    setAge(currentDog?.age || "");
  }, [currentDog]);

  const save = () => {
    if (!currentDog) return;
    updateDog({ nickname, description, age });
  };

  return (
    <div>
      <Link to={`/profile/${currentDog?.id}`}>Go back</Link>
      <h1>Edit {currentDog?.name}</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "5rem 1fr",
          gridGap: "1rem",
          padding: "1rem",
          borderRadius: ".25rem",
          background: "#333",
        }}
      >
        <span>Nickname</span>
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <span>Age</span>
        <input
          type={"number"}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <span>Description</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span>&nbsp;</span>
        <button onClick={() => save()}>Save</button>
      </div>
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <FriendSelector />
        <FriendsList />
      </div>
    </div>
  );
};
