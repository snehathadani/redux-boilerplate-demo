import React, {useEffect, useState, Fragment} from "react"
import axios from "axios";
import {connect, useDispatch} from 'react-redux';
import fetchPosts from '../actions/postAction'



function Posts ({posts}){

    //const [initialPosts, setPosts] = useState([])
   /* useEffect(()=> {
        const fetchData = async()=> {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/posts',
            )
        setPosts(result.data)
        }
        fetchData();
    }, [])
    */
  const dispatch = useDispatch();
  useEffect(()=> {
      console.log("calling fetch")
      fetchPosts(dispatch)
  }, [])

    return(
        
        <div>
            <h1>Posts</h1>
        {posts.map(e=> {
            return(
                <ul>
                <li key = {e.userId}>{e.title}</li>
                <p>{e.body}</p>
                </ul>
            )
        })}
        </div>
        
    )
}


const mapStateToProps = state => ({
    posts: state.posts ? state.posts.items : [] // posts because whatever you name in rootReducer
})
export default connect(mapStateToProps)(Posts);
