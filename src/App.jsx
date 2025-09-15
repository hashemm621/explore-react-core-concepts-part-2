import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";
import Users from "./user";


function App() {
  function handleClick() {
    alert("I am Clicked");
  }

  return (
    <>
      <h3>Explore React Core Concepts Part 2</h3>

      <Users></Users>
      <Batsman></Batsman>

    <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
