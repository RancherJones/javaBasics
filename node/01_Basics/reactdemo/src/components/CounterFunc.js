import { useEffect, useState } from "react";

export default function CounterFunc(){
    
  const[count, setCount] = useState(0);

  useEffect(()=>{
    console.log("started finc")
  },[]);

  let increase = ()=>{
      
      setCount(count + 1)
  };
  return ( <div>
    <h1>Functional Counter</h1>
    <h2>{count}</h2>
    <button onClick={increase}>Inc</button>
  </div>);
}