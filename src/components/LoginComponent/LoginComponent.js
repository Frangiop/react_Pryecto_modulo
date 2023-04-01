import React from 'react';
import PropTypes from 'prop-types';
import {Form, Container,FormGroup,FormLabel,Button, } from 'react-bootstrap';
import {useState} from 'react';
import { doLogin } from '../../store/auth/actions';
import { useDispatch,useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';
   

const LoginComponent = () => { 



  const [username,setUsername] = useState ("kminchelle")  
  const [password,setPassword] =useState("0lelplR")   
  const {user} = useSelector((state)=> state.AuthReducer)


  const dispatch = useDispatch();


  function tryLogin(){
    dispatch(doLogin({ username:username, password:password }))
 }


 if(user && user.id){
     return(
     <Navigate to="/profile" replace></Navigate>
     )
   }

  return(
 <Container>
<Form>
     <FormGroup>
          <FormLabel> Username </FormLabel>
          <input value ={username} onChange={(e)=>setUsername(e.target.value)} placeholder="email" type="email"></input>
     </FormGroup>
     
      <FormGroup>
      <FormLabel> Password </FormLabel>
      <input valie = {password} onChange={(e)=>setPassword(e.target.value)}  placeholder="password" type="password"></input>

      </FormGroup>
      <Button onClick={tryLogin}>Login</Button>
 </Form>
 </Container>
  ) 
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
