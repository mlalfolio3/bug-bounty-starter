import { useState, useEffect } from "react";
import { fetchBugs } from "./mockApi.js";

export default function App() {

  // 1) State: component memory
  const [bugs, setBugs] = useState([]);           // empty list initially

  // 2) Effect: fetch bugs only once when the component opens
  useEffect(() => {
    fetchBugs()
      .then((data) => setBugs(data))              // success: save bugs
  }, 
  []); // [] = run only the first time


  return (
    <div>
      <h1>Bug Bounty Board</h1>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>{bug.title}</li>
        ))}
      </ul>
    </div>
  );
}