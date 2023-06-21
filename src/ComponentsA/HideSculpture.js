import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { sculptureList } from './data';
export default function HideSculpture() {
    const[index,setIndex]=useState(0);
    const[hide,setHide]=useState(false); 
    function isHide(){
        setHide(!hide);
    }
    function indexMove(){
        setIndex(index+1);
    }
    const sculpture=sculptureList[index];
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sculpture.url} />
      <Card.Body>
        <Card.Title>{sculpture.name}</Card.Title>
        <Button variant="primary" onClick={indexMove}>next</Button>
        
        <Button variant="primary" onClick={isHide}>{!hide?'Show':'Hide'} details</Button>
        {hide && <Card.Text>
          {sculpture.description}
        </Card.Text>}
      </Card.Body>
    </Card>
  )
}
