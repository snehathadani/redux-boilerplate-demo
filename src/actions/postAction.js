import {FETCH_POSTS, NEW_POST} from './types';


 const fetchPosts = dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(posts=> {
            dispatch({
            type:FETCH_POSTS,
            payload:posts
        })
        }
        )
};

export default fetchPosts;

export const createPost =  (dispatch, postdata)=> {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type' : 'application/jason'
        },
        body: JSON.stringify(postdata)
    })
    .then(res=> res.json())
    .then(post=> dispatch({
        type:NEW_POST,
        payload:{...post, ...postdata}
    }));
};



/* fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(post)
})
.then(res=> res.json())
.then(data=> console.log(data));*/