import { useState } from "react";
import { useEffect } from "react";
const SelfCounter=() => {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
          if(counter<20){
            setCounter(counter + 1);
          }
          else{
            setCounter(0)
          }        
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    });
  
    return (
    <h1>count:{counter}</h1>);
  };
export default SelfCounter;