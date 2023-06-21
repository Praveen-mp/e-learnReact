import React from 'react'
import {people} from './DataScience'
export default function Lists() {
  const sciData= people.map((d)=>{
    return(
        <ul>
          <h1>{d.name}</h1>
          <p>{d.profession}</p>
        </ul>
    );
  })
  return (
    <div>
         {sciData}
    </div>
  )
}

