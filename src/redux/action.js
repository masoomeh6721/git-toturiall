import axios from "axios";

export const getUsers = (userId) => async (dispatch, getState) => {
   try {
      dispatch({ type: "loading",payload:{data:[], loading:true ,error:""} })

      const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${userId? `${userId}/posts`:""}`)
     
      dispatch({ type: "success", payload: {data:[...data], loading:false ,error:""} })
     
   } catch (error) {
      
      dispatch({ type: "failed",payload:{data:[], loading:false ,error:error.messsage} })
      
      console.log(error)
   }
}

export const getComments = (postIdId) => async (dispatch, getState) => {
   try {
      dispatch({ type: "cmLoading",payload:{data:[], loading:true ,error:""} })

      const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${postIdId}/comments`)
     
      dispatch({ type: "cmSuccess", payload: {data:[...data], loading:false ,error:""} })
     
   } catch (error) {
      
      dispatch({ type: "cmFailed",payload:{data:[], loading:false ,error:error.messsage} })
      
   }}


