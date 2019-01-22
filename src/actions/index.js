
import {
        
        FETCH_RENTALS_SUCCESS,
        FETCH_RENTALS_BY_ID_SUCESS,
        FETCH_RENTALS_BY_ID_INIT
      } from './types';

import axios from 'axios';



const fetchRentalsSuccess = (rentals) =>{
  return {
    type:FETCH_RENTALS_SUCCESS,
    rentals
}
}



const fetchRentalsByIdinit = (rental) =>{
  return {
    type:FETCH_RENTALS_BY_ID_INIT,
    rental
}
}

const fetchRentalsByIdSucess = (rental) =>{
  return {
    type:FETCH_RENTALS_BY_ID_SUCESS,
    rental
}
}

export const fetchRentals =() =>{
  return dispatch =>{
    axios.get('/api/v1/rentals/')
          .then((res)=> res.data)
          .then((rentals) =>dispatch(fetchRentalsSuccess(rentals))
        )
      }   
}



export const fetchRentalsById = (rentalId) =>{
  debugger;
    return function (dispatch){
    dispatch(fetchRentalsByIdinit())
    axios.get(`/api/v1/rentals/${rentalId}`)
          .then((res)=> res.data)
          .then((rental)=>dispatch(fetchRentalsByIdSucess(rental))
         );
  }
 
}


