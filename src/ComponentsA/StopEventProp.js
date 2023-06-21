import React from 'react'
import { Button } from 'react-bootstrap';
function handleClick({mess,child}){
    return(
        <Button onClick={(e)=>{e.stopPropagation(); onClick();}}>
            click
        </Button>
    );
}
export default function StopEventProp() {
  return (
    <div className='StopEventProp' onClick={()=>alert('Message')}>
         <Button onClick={()=>alert("mess")}>
             Hello
         </Button>
    </div>
  )
}
