import React, { Component, useState,useEffect } from 'react'
import {Form,Button,Card, Container} from 'react-bootstrap'
import Read from './Read';
export default function Login() {
 
const initialValue={email:'',password:''};
const [formValues,setFormValues]=useState(initialValue);
const [formErrors,setFormErrors]=useState({});
const [isSubmit,setisSubmit]=useState(false)
const handleChange= (e) =>{
  const {name,value} = e.target;
  setFormValues({...formValues,[name]:value})
  console.log(formValues);
}
const handleSubmit=(e)=>{
  e.preventDefault();
  setFormErrors(validate(formValues));
  setisSubmit(true);
};
useEffect(()=>{
  console.log(formErrors);
     if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues);
     }
},[formErrors])
const validate=(values)=>{
  const errors={};
   const regex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   if(!values.email){
       errors.email="Email required";
   }else if(!regex.test(values.email)){
    errors.email="Email is not in valid format";
   }
   if(!values.password){
    errors.password="Password required";
   }else if(values.password.length<3){
    errors.password="Password range is 4 to 15 characters only";
   }else if(values.password.length>15){
    errors.password="Password range is 4 to 15 characters only";
   }
   return errors;
}
  return (
    
        <div className='list'>
         
          <Card style={{ width: '20rem' }} className="form">
          {Object.keys(formErrors).length===0 && isSubmit?(<div className='ui message success'>Sigin successfully</div>)
:(
  <pre>{JSON.stringify(formValues,undefined,2)}</pre>
)} 
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Text>
                Perform Crud operation
              </Card.Text>
              <Form onSubmit={handleSubmit}>
                <Form.Group className=" mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={formValues.email} onChange={handleChange}/>
                    <p className='text-danger'>{formErrors.email}</p>
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
  
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={formValues.password} onChange={handleChange}/>
                    <p className='text-danger'>{formErrors.password}</p>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
              </Form>
            </Card.Body>
            <Read/>
      </Card>
      </div>
  )
}
