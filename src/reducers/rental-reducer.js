
import {FETCH_RENTALS,FETCH_RENTALS_BY_ID_SUCESS,FETCH_RENTALS_BY_ID_INIT} from '../actions/types';

const INITIAL_STATE = {
    rentals:{
       data:[]
    },
    rental:{
       data:{}
    },
}
export const rentalReducer = (state=INITIAL_STATE.rentals,action) => {
    
    switch(action.type){
        case FETCH_RENTALS:
        return {...state,data:action.rentals}
        default:
        return state;
    }
}

export const seletedRentalReducer = (state=INITIAL_STATE.rental,action) => {
    
    switch(action.type){
        case FETCH_RENTALS_BY_ID_SUCESS:
           return {...state,data:action.rental}

        case FETCH_RENTALS_BY_ID_INIT:
           return {...state,data:{}}
  
        default:
        return state;
    }
}