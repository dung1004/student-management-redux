import { ON_SEARCH } from "../constants";

let initialState = '';

const onKeyWord = (state = initialState, action) => {
    switch (action.type){
        case ON_SEARCH:
            state = action.keyWord;
            return state;
        default:
            return state;
            
    }
}

export default onKeyWord;