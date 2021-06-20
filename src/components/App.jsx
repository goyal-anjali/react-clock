import React from "react";

function App() {
  const [title, setTitle] = React.useState("Hello There");
  const [name, setName] = React.useState("");
  const [time, setTime] = React.useState("Unlock your Clock");
  const [isMouseOver, buttonOver] = React.useState(false);
  const date = new Date();
  var greeting = "";
  var color = "#CEE5D0";

  function changeHandler(event) {
    setName(event.target.value);
  }
  function mouseHandler() {
    buttonOver(true);
  }
  function mouseOutHandler() {
    buttonOver(false);
  }

  function getTime() {
    document.querySelector("button").style.visibility = "hidden";
    document.querySelector("input").style.visibility = "hidden";
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    if (date.getHours() >= 12 && date.getHours() < 16) {
      greeting = "Good Afternoon ";
      color = "#FAF1E6";
    } else if (date.getHours() >= 16 && date.getHours() <= 20) {
      greeting = "Good Evening ";
      color = "#5E8B7E";
    } else if (date.getHours() >= 4 && date.getHours() < 12) {
      greeting = "Good Morning ";
      color = "#F9DFDC";
    } else {
      greeting = "Good Night ";
      color = "black";
      document.querySelector("body").style.color = "white";
    }
    
    document.querySelector("body").style.background = color;
    setTitle(greeting + name);
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{time}</p>
      <input
        onChange={changeHandler}
        value={name}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={mouseHandler}
        onMouseOut={mouseOutHandler}
        onClick={getTime}
      >
        Show Time
      </button>
    </div>
  );
}

export default App;
