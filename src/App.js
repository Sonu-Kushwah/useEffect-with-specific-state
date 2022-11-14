import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count1,setCount1]=useState(1);
  const [count2,setCount2]=useState(10);

  useEffect(()=>{
    console.log("useEffect Called in Component Mount");
  },[count1])
  return (
    <>
     <h3>UseEffect Hooks with specific props</h3>
     <h4>Count 1:{count1}</h4>
     <h4>Count 2:{count2}</h4>
     <button onClick={()=>setCount1(count1+1)}>Couner 1</button>
     <button onClick={()=>setCount2(count2+2)}>Counter 2</button>
    </>
  );
}

export default App;
