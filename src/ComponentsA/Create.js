import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Button} from 'react-bootstrap';
import {Media} from 'reactstrap';
class Create extends Component {
  constructor(props) {
    super(props);
    this.state={
         crud:[
             {
                id:0,
                name:'Create',
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeO2YWQIjhQjqrv5g1qYjtwF-jtXStVX2OQ&usqp=CAU'
             },
             {
              id:1,
              name:'Update',
              image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeO2YWQIjhQjqrv5g1qYjtwF-jtXStVX2OQ&usqp=CAU'
            }
         ]
    } 
  }
  render() {
    const menu=this.state.crud.map((crud)=>{
      return(
        <div id={crud.id}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={crud.image} />
          <Card.Body>
            <Card.Title>{crud.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    </div>
      );
    })
    return (
      <div>
         <Media list>
          {menu}
         </Media>
      </div>
    );
  }
}

Create.propTypes = {

};

export default Create;