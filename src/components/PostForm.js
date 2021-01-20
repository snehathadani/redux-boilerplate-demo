import React, {useState,useEffect} from "react"
import { connect, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import {createPost} from "../actions/postAction";

 function PostForm (){
    const [obody, setBody] = useState({body:'', title:''})
    const dispatch = useDispatch();
    
    const onChange = (e)=> {
        setBody({...obody, [e.target.name]:e.target.value})
    }


    const Submit = (e)=> {
        e.preventDefault();
        createPost(dispatch, obody)        
    }


            /*/this will get transferred and called from actions now tat Redux is installed
       /* fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res=> res.json())
        .then(data=> console.log(data));*/


    
    return(
       
        <div>
            <h1>
                Add Posts
            </h1>
            <form onSubmit= {Submit}>
                <div>
                <label> Title: </label> <br/>
                <input type = "text"
                       name = 'title' 
                       value = {obody.title}
                       onChange ={onChange}
                        />
                </div>
                <div>
                    <label> Body: </label> <br/>
                    <textarea name = "body"
                              value ={obody.body}
                              onChange ={onChange}
                              />
                </div>
                <button type = "submit">Submit</button>
                </form>
        </div>
        
    )
}


export default PostForm