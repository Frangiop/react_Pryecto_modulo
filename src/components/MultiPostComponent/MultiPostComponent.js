import React ,{useEffect} from 'react';
import {Card, Container,CardImg } from 'react-bootstrap';
import  {useDispatch,useSelector } from 'react-redux';
//import {useEffect } from 'react';
import {getPosts} from '../../store/posts/actions'
import { Bars } from 'react-loader-spinner';
//import PropTypes from 'prop-types';
import './MultiPostComponent.css';
import {Link} from 'react-router-dom';

  
const MultiPostsComponent = () => { 
  // dispatcher para ejecutar acciones
   const dispatch = useDispatch()
   // las partes que nos interesan de la store que están en el reducer PostsReducer
   const {posts,loadingPosts}= useSelector((state) =>state.PostsReducer)
    
   // CUANDO ARRACNA EL Componetne 
   useEffect(()=> {
   // llamar a la accion para que obtenga los posts  
    dispatch(getPosts())
  },[])



  if(loadingPosts){
    return (
      <Container >
       {/* Cargando ... */} 
        <Bars
          height = {100}
          width ={100} >
        </Bars>
      </Container>
    )
  }

   return(

    <Container className="d-flex flex-row flex-wrap" >

{posts.map(post =>{
  return (
    <div className="order-md-2 col-md-6 col-lg-4 p-3" >
    <Card   className="px-4 mb-4">
      <Card.Title >
      <Link to={`/post/${post.id}`}> {post.name} </Link>
      </Card.Title>
      <Card.Text>
          {post.species}
      </Card.Text>
    
      <img  className=".img-fluid" variant="top"  src={post.image} alt={post.name} />
    
       {/*    <img  top width="60%" src={post.image} alt={post.name} /> */} 
     {/* <CardImg  top width="50%" src={post.image} alt={post.name} /> */} 
    </Card>
    </div>
  )
})}
   
    </Container>

  )
  };

MultiPostsComponent.propTypes = {};

MultiPostsComponent.defaultProps = {};

export default MultiPostsComponent;
