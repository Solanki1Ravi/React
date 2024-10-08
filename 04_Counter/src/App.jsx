import "./app.css";
import { useState } from "react";

function App() {
  // let counter = 10;
  let [counter , setCounter] = useState(10)

  const addValue = ()=>{
    counter = counter+1
    setCounter(counter)
    console.log(counter);
    
    
  }
  
  const removeValue = ()=>{
    counter = counter-1
    setCounter(counter)
    console.log(counter);
    
   
    
  }
  
  
  return (
    <>
      <h1>Ravindra Singh | {counter}</h1>
      <h2>Value: {counter}</h2>
      <button onClick={addValue} >Increase Value</button>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
