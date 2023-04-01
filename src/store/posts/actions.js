import axios from 'axios'

import {
GET_POSTS,
GET_POSTS_OK,
GET_POSTS_FAIL,

GET_SINGLE_POST,
GET_SINGLE_POST_OK,
GET_SINGLE_POST_FAIL

} from './actionTypes'

export function actionGetPosts(){
return {
    type : GET_POSTS
}
}

export function actionGetPostsOk(posts){
    return {
        type:GET_POSTS_OK,
        payload:posts
    }
}

export function actionGetPostsFail(error){
     return {
        type:GET_POSTS_FAIL,
        payload:error,
     }
}






export function actionGetSinglePost(postId){ // recorda meter en parentesis simempre el payload
    return {
        type: GET_SINGLE_POST,
        payload: postId
    }
}


export function actionGetSinglePostOk(posts){
    return{
        type: GET_SINGLE_POST_OK,
        payload:posts
    }
}

export function actionGetSinglePostFail(error){
    return {
       type: GET_SINGLE_POST_FAIL,
       payload:error,
    }
}




export function getPosts(){
    return async (dispatch) =>{
        dispatch(actionGetPosts())
        try {
            const response = await axios.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,67,43,89,65,43,77,69,179")
             dispatch(actionGetPostsOk(response.data))
        } catch(error){
            dispatch(actionGetPostsFail(error))
        }
    }
}



export function getSinglePost(postId){
    return async (dispatch) =>{
        dispatch(actionGetSinglePost(postId))
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${postId}`)
             dispatch(actionGetSinglePostOk(response.data))
        } catch(error){
            dispatch(actionGetSinglePostFail(error))
        }
    }
}