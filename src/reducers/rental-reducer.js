
import {FETCH_RENTALS,FETCH_RENTALS_BY_ID} from '../actions/types';

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
        debugger
        return {...state,data:action.rentals}

        default:
        return state;
    }
}

export const seletedRentalReducer = (state=INITIAL_STATE.rental,action) => {
    
    switch(action.type){

        case FETCH_RENTALS_BY_ID:
        debugger
        //return Object.assign({},state,{data:action.rental});
        return {...state,data:action.rental}

        default:
        return state;
    }
}