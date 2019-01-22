import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';


class RentalDetail extends Component {

    componentWillMount(){
        const rentalId =this.props.match.params.id;
        debugger;
        this.props.dispatch(actions.fetchRentalsById(rentalId));
     }

    render(){
        const rental= this.props.rental;
        if(rental.id){
        return (
            <div>
               <h1>{rental.id}</h1>
               <h1>{rental.title}</h1>
               <h1>{rental.city}</h1>
            </div>
        )} else{
            return(
                <h1>Loading</h1>
            )
        }

        
    }
}

function mapStateToProps(state){
    debugger
    return {
        rental:state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail);