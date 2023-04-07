import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ListDogs } from "./components/ListDogs";
import { Link } from "react-router-dom";
import { buildErrorMessage } from "vite";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <h1>Dogbook</h1>
        <Link to="/create">
          <button
            style={{
              margin: 5,
            }}
          >
            Add new dog
          </button>
        </Link>
        <ListDogs />
      </div>
    </div>
  );
}

export default App;
