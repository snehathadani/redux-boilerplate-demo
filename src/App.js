import React from "react";
import Posts from './components/Posts';
import './App.css';
import PostForm from "./components/PostForm";
import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import store from './store';

const store = createStore(()=> [], {}, applyMiddleware)
function App() {
  return (
    <div className="App">
       <PostForm/>
      <Posts/>
    </div>
  );
}

export default App;
