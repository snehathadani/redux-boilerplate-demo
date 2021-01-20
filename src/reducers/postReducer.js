import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    items: []
}


export default function postFunction(state= initialState, action){
    console.log(action)
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload // same as the postAction like payload:posts payload is just a naming convention could be anything
            };
            case NEW_POST:
                state.items.push(action.payload)
                const newItems = state.items
                console.log(newItems)
                return{...state, items: newItems}
        default:
            return state;
    }
}