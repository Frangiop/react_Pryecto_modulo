import { Container } from "react-bootstrap";
import './AboutPage.css'

export default function AboutPage(){   // esto lo metemos manual todo 
    return(
        <div className="full-screen">
        <Container className="bg-image full-screen" >
             <div className='header-container h1 '>
            <h1>Mas de Morty </h1>
             <p>Dale alas </p>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3R9WAf885c3eNZfZ1DQfhdJg5zM6l3SRe8A&usqp=CAU" alt="imagen 1"/>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ALBgX-t-cWKKCraftUn1u7JzzxmELkbWNw&usqp=CAU" alt="imagen 2"/>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtD6_A-jkw8k5GRvxECmnkQ4FsqgTqI8S-g&usqp=CAU" alt="imagen 3"/>
             </div>
        </Container>
     </div>
    )
} 
