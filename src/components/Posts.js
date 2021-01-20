import React, {useEffect, useState, Fragment} from "react"
import axios from "axios";
export default function Posts (){

    const [initialPosts, setPosts] = useState([])
    useEffect(()=> {
        const fetchData = async()=> {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/posts',
            )
        setPosts(result.data)
        }
        fetchData();
    }, [])

    return(
        
        <div>
            <h1>Posts</h1>
        {initialPosts.map(e=> {
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


