import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:3000/api/fib/${search}`);
      let formatData = result.data + " ";

      setData(formatData);
    };

    fetchData();
  }, [search]);
  console.log(data);
  return (
    <div>
      <h1 className="Title">Find The Numbers In A Fibonacci Sequence</h1>
      <main className="Main">
        <div className="Number">
          <h2>{data}</h2>
        </div>
      </main>

      <input
        className="searchArea"
        type="number"
        min="0"
        max="92"
        value={query}
        onChange={event => {
          if (event.target.value > 92) {
            alert("Submit 92 or less");
          }
          if (event.target.value < 0) {
            alert("Must be a positive number");
          } else {
            setQuery(event.target.value);
          }
        }}
      />
      <button
        className="submitButton"
        type="submit"
        onClick={() => setSearch(query)}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
