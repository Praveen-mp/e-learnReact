import React, { Component, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Input } from 'reactstrap';
export default function Delete() {
   const [name,setName] = useState('name');
   const [age,setAge]=useState(0);   
  return (
    <div>
        <Input type='text' value={name} onChange={((e)=> setName(e.target.value))}/>
        {/* <Input type='number' value={age} onChange={(()=> setAge(age+1))}/> */}
        <Button bgColor="primary" onClick={(()=>setAge(age+1))}>age</Button>
        <p>{name} is one of the well coder his age is {age}</p>
    </div>
  )
}

