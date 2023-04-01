import { Container } from "react-bootstrap";
import LoginComponent from "../components/LoginComponent/LoginComponent"
import './LoginPage.css'

export default function LoginPage(){   // esto lo metemos manual todo 
    return(
    <div className='bg-image1'>
        <Container  className='color'>
            <h1>LoginPage</h1>
            <LoginComponent></LoginComponent>

            <img src="https://i.pinimg.com/originals/10/96/74/109674efbe88f8cf810b284faf5f42e1.gif" alt="Descripción del GIF"  />
        </Container>
    </div>
    )
} 
