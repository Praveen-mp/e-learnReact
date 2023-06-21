import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { sculptureList } from './data';

export default function Sculpture() {
    const [index,setIndex] = useState(0);
    function contentChange(){
        setIndex(index+1);
    }
    let sculpture=sculptureList[index]
  return (
    <div>
        
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sculpture.url} />
      <Card.Body>
      <Button onClick={contentChange}>Go somewhere</Button>
        <Card.Title>{sculpture.name}</Card.Title>
        <Card.Text>
          {sculpture.description}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}
