
import * as redux from 'redux';
import {rentalReducer,seletedRentalReducer} from './rental-reducer';

export const init =() => {
   const reducer = redux.combineReducers({
        rentals:rentalReducer,
        rental:seletedRentalReducer

    })
    const store =redux.createStore(reducer);
    return store;
}