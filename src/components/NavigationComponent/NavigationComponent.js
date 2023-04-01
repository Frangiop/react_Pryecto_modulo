import React from 'react';
import { Container,Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../../store/auth/actions';



const NavigationComponent = () => {

  const {user} = useSelector((state)=>state.AuthReducer)

  const dispatch = useDispatch()

  function closeSession (){
    dispatch(doLogout())
   
  }

 return ( 
  <Navbar bg ="dark" variant="dark">
     <Container>   
  <Navbar.Brand>
Rick and Morty 
  </Navbar.Brand>

  <Nav> {/* aquie ya creo los link de react con router-dom */}

<Link  className="nav-link" to='/'>Home</Link>  
<Link className="nav-link"  to='/posts'>Contenido</Link>     {/*  className="nav-link" est es solo el estilo de bootstrap */}
<Link  className="nav-link" to='/about'>About</Link>
{ user && user.id?"": <Link className="nav-link" to='/login'>Login</Link>}
{ user && user.id? <Link className="nav-link" to='/profile'>Profile</Link> : "" }
{/*Link  className="nav-link" to='/login'>Login</Link>
<Link className="nav-link" to='/profile'>Profile</Link> */}

{user && user.id?  <Link onClick={closeSession} className="nav-link">LogOut</Link> : ""}

</Nav> 

  </Container>
  </Navbar>
 )
 };

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
