import {ActionTypes} from '../ActionTypes'

const initialState = {
    Products:[],
    cartData : [],
}

export const ProductReducer = (state=initialState,action) =>{
        switch(action.type){
            case ActionTypes.ADD_TO_CART:
                // console.log(action)
            return {...state,cartData : [...state.cartData, action.payload]};
            
            default :
            return state;
        }
}


// userReducer(reducer,initialState)
// newState = reducer(currentState,action)