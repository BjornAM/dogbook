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
      <div className="card">
        <Link to="/create">
          <button>Add new dog</button>
        </Link>
        <ListDogs />
      </div>
    </div>
  );
}

export default App;
