
import thunk from 'redux-thunk';
import {rentalReducer,seletedRentalReducer} from './rental-reducer';
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';


export const init =() => {
   const reducer =combineReducers({
        rentals:rentalReducer,
        rental:seletedRentalReducer
    })
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
    return store;
}