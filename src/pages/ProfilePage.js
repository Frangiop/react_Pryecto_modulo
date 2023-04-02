

import { useSelector } from "react-redux";
import { Container,FormGroup,Form ,Image} from "react-bootstrap";
import './ProfilePage.css'

export default function ProfilePage(){
    
    const {user} = useSelector((state)=>state.AuthReducer )
    return (

        <div className="bg-image3">
        <Container>
        <h1 className="colorProfile" >Profile Rick & Morty</h1>

  <Form > 
      <FormGroup className="colorProfile">   
           <label className="colorProfile2">Nombre</label>
            {user.firstName }
            </FormGroup>
            <FormGroup className="colorProfile">   
           <label className="colorProfile2" >Apellido</label>
            {user.lastName }
            </FormGroup>

            <FormGroup className="colorProfile">   
           <label className="colorProfile2" >Email</label>
            {user.email }
            </FormGroup>
            <Image src={user.image}></Image>
         </Form>
    </Container>
   </div>
)


}