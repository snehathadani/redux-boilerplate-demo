import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    items: [],
    item: {}
}


export default function postFunction(state= initialState, action){
    console.log(action)
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload // same as the postAction like payload:posts payload is just a naming convention could be anything
            }
        default:
            return state;
    }
}