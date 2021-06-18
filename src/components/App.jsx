import React from "react";

function App() {
  function getTime() {
    document.querySelector("button").style.visibility = "hidden";
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }

  const [TIME, setTime] = React.useState("CLOCK");

  return (
    <div className="container">
      <h1>{TIME}</h1>
      <button onClick={getTime}>Show Time</button>
    </div>
  );
}

export default App;
