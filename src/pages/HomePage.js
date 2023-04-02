import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function HomePage(){   // esto lo metemos manual todo 
    const{user} = useSelector((state)=>state.AuthReducer ) 
    
    return(
     <div className='bg-image1'>
        <Container className='color'>
 <Container>
            <h1>Rick & Morty</h1>
            {user && user.id? <h2> Bienvenid@ {user.firstName}</h2>: 'No estas loggeado'}
       
        </Container>

        <div style={{
      backgroundImage: `url('https://wallpaperforu.com/wp-content/uploads/2021/08/Wallpaper-Tv-Show-Rick-And-Morty-Morty-Smith-Rick-Sanc43.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // ajusta la altura según tus necesidades
    }}>
    </div>
        </Container>
        </div>
    )
} 
