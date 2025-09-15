import { useState } from "react";


export default function Counter() {
    // use state
    const [count, setCount] = useState(0);

    // click event handler == handleAdd
    const handleAdd =() =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    // style with internal css
  const counterStyle = {
    border: "2px solid gray",
    margin: "15px",
    padding: "10px",
    textAlign: "center",
  };

    // ui or display xml
  return (
    <div style={counterStyle}>
      <h3>Count: {count} </h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
