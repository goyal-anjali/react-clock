import React from "react";

function App() {

  const [title, setTitle] = React.useState("Hello There");
  const [name, setName] = React.useState("");
  const [isMouseOver, buttonOver] = React.useState(false);
  const date = new Date();
  var greeting = "";

  function changeHandler(event) {
    setName(event.target.value);
  }
  function mouseHandler(){
    buttonOver(true);
  }
  function mouseOutHandler(){
    buttonOver(false);
  }

  function getTime() {
    document.querySelector("button").style.visibility = "hidden";
    document.querySelector("input").style.visibility = "hidden";
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    if (date.getHours >= 12 && date.getHours < 16) {
      greeting = "Good Afternoon ";
    } else if(date.getHours >= 16 && date.getHours <= 20){
      greeting = "Good Evening ";
    } else if(date.getHours >= 4 && date.getHours < 12){
      greeting = "Good Morning ";
    } else {
      greeting = "Good Night ";
    }
    setTitle(greeting + name);
  }

  const [TIME, setTime] = React.useState("CLOCK");

  return (
    <div className="container">
    <h1>{title}</h1>
      <h1>{TIME}</h1>
      <input
        onChange={changeHandler}
        value={name}
        type="text"
        placeholder="What's your name?"
      />
      <button 
      style={{backgroundColor: isMouseOver? "black": "white" }}
      onMouseOver={mouseHandler}
      onMouseOut={mouseOutHandler}
      onClick={getTime}>Show Time</button>
    </div>
  );
}

export default App;
