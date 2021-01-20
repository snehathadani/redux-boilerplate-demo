import React from "react";
import Posts from './components/Posts';
import './App.css';
import PostForm from "./components/PostForm";
import store from './store';
import {Provider} from 'react-redux';



//const store = createStore(()=> [], {}, applyMiddleware())
function App() {
  
  return (
    <Provider store ={store}>
    <div className="App">
       <PostForm/>
      <Posts/>
    </div>
    </Provider>
  );
}

export default App;
