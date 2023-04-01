import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { getSinglePost } from "../store/posts/actions";
import SinglepostComponent from "../components/SinglepostComponent/SinglepostComponent";

export default function SinglePostPage(){
    const params = useParams() 
    const disptach =useDispatch()


    useEffect(()=>{
      disptach(getSinglePost(params.id)) 
   
    },[])
   

  return (

      <Container>
 <SinglepostComponent></SinglepostComponent>
      </Container>
  )

}