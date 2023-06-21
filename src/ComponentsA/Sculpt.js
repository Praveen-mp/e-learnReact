import React, { Component } from "react";
import PropTypes from "prop-types";
import { sculptureList } from "./data";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Sculpt extends Component {
    
  constructor(props) {
    super(props);
    this.state={
        id:1,
        sculpture:sculptureList
    }
   
  }
  
  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}
    
  render() {
  
    return (
           
    this.state.sculpture.map((item,id)=>{
        <div>
        <li key={id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.url} />
          <Card.Body>
            <Button onClick={() => 
             this.setState({ id: this.state.id + 1 })}>
             Go somewhere</Button>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
        </li>
       
      </div>
    })
      
    );
  }
}
export default Sculpt;
