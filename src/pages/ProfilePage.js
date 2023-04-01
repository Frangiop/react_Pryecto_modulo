

import { useSelector } from "react-redux";
import { Container,FormGroup,Form ,Image} from "react-bootstrap";

export default function ProfilePage(){

    const {user} = useSelector((state)=>state.AuthReducer )
    return (
        <Container>
        <h1>Profiel page</h1>

  <Form> 
      <FormGroup>   
           <label>Nombre</label>
            {user.firstName }
            </FormGroup>
            <FormGroup>   
           <label>Apellido</label>
            {user.lastName }
            </FormGroup>

            <FormGroup>   
           <label>Email</label>
            {user.email }
            </FormGroup>
            <Image src={user.image}></Image>
         </Form>
    </Container>
)


}