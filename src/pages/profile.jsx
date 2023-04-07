import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDogs } from "../components/DogContext";
import { FriendsList } from "../components/FriendsLists";

export const Profile = () => {
  const { id } = useParams();
  const { dogs, currentDog, setDogById, toggleDogStatus } = useDogs();

  useEffect(() => {
    if (dogs.length < 1) return;
    setDogById(id);
  }, [id, dogs]);

  if (!currentDog) return <span>Missing {id}</span>;

  return (
    <>
      <div>
        <Link to={"/"}>Go back</Link>
        <h1>{currentDog.name}</h1>
      </div>
      <div>
        {currentDog.nickname || "no nickname"} is {currentDog.age || "unknown"}{" "}
        year old
        <p>{currentDog.description || ""}</p>
      </div>
      <div>
        <Link to={`/profile/${currentDog.id}/edit`}>Edit dog</Link>
      </div>
      <img src={currentDog.img} alt={currentDog.name} />
      <div>
        {currentDog.name} currently is <b>{currentDog.status}</b>
      </div>

      <FriendsList />

      <button onClick={toggleDogStatus}>
        Change status to {currentDog.status === "home" ? "away" : "home"}
      </button>
    </>
  );
};
