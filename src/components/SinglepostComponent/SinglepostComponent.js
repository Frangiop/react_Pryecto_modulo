import React from 'react';
import PropTypes from 'prop-types';
import {Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Bars } from 'react-loader-spinner';

const SinglepostComponent = () => {
const {post,loadingSinglePost} = useSelector((state)=>state.PostsReducer)
 

if(loadingSinglePost){
  return(
    <Bars height={100}
    width={100} >
    </Bars>
  )
}

return (
 <Container>
     <Card className="px-4 py-2 mb-3">
       <Card.Title>
      <p>Su nombre es  " {post.name} " </p>
       </Card.Title>
       <Card.Text>
       <p>Su raza es :  " {post.species} " </p>
       </Card.Text>
       <Card.Text>
       <p>Su raza es :  " {post.species} " y su genero :  " {post.gender} " </p>
       <p>Y su apariencia sería algo como esto : </p>
        <img  src={post.image} alt="" ></img>

       </Card.Text>

       

     </Card>
  </Container>
  )
}

SinglepostComponent.propTypes = {};

SinglepostComponent.defaultProps = {};

export default SinglepostComponent;
