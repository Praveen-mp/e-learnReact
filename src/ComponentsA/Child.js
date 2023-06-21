import React, { useState } from 'react'


export default function Child(props) {
    const [view,setView] = useState('eat');
    function handleToggle(){
        // e.preventDefault();
        setView('deaddd');
    }
    console.log(view);
  return (
    <div>
        Child
        <button onClick={handleToggle}>click me</button>
        {/* {view}?<h1>{props.dd}</h1>:<h1>Nothing</h1> */}
       <h1>{view}</h1>
    </div>
     
  )
}
