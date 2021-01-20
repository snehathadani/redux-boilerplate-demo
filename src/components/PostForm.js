import React, {useState} from "react"
import { Provider } from "react-redux"

export default function PostForm (){
    const [obody, setBody] = useState({body:'', title:''})
    const onChange = (e)=> {
        setBody({[e.target.name]:e.target.value})

        const post = {
            title: obody.title,
            body: obody.body
        }
    
    }
    const onSubmit = (e)=> {
        e.preventDefault();

        const post = {
            title: obody.title,
            body: obody.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res=> res.json())
        .then(data=> console.log(data));
    }
    return(
        <Provider store ={store}>
        <div>
            <h1>
                Add Posts
            </h1>
            <form onSubmit= {onSubmit}>
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
        </Provider>
    )
}


