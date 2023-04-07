import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ListDogs } from "./components/ListDogs";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Dogbook</h1>
      <div className="card">
        <Link to="/create">
          <button
            style={{
              marginBottom: 20,
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
