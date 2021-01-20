Install Reedux, React-Redux and Redux -Thunk

Thunk is a middleware for redux that allows to directly access dispach methods and make asynchronous calls from actions

Provider is a React component that binds react with redux.
import {Provider} from 'react-redux';

Inside provider you need to define a store. Store holds the whole state tree of an application. You can change the app state by dispaching actions. Store has getState(), dispach(action), subscribe(listener), replaceReducer(nextReducer) methods in it.


Create a store by using a function called createStore(rootReducer, [preloadedState], [any enhancer function])
onst store = createStore(()=> [], {}, applyMiddleware)
import {createStore, applyMiddleware} from 'redux';
You can create a separate store folder or keep all in one place.

create a reducer folder and add separate files for all your reducers. This is helpul as having separate reducers can help with scaling your app. The index.js file inside reducer can keep track of all your reducers inside a single variable combinereducers.


Set up another folder actions. 
Optional: declare types and you can use them as variables throughout the application, More of a convineance, not a requirement.
Then in the action folder start describing your actions. Thunk middleware can allow to call dispach function directly so that you can make asynchronous requests. Dispach works similar to resolve and a promise. You give type and a payload.


