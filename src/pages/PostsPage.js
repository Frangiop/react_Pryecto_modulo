import { Container } from "react-bootstrap";
import MultiPostComponent from '../components/MultiPostComponent/MultiPostComponent';
import './PostPage.css'

export default function PostsPage(){   // esto lo metemos manual todo 
    return(
        <div className='bg-image1'>
        <Container className='color'>
        <h1>Personajes </h1>
        <MultiPostComponent></MultiPostComponent> 
    </Container>
    </div>
    )
} 
