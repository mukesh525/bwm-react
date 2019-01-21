import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';


class RentalDetail extends Component {
    render(){
        return (
            <div>
               
               <h1>I m details componenet {this.props.match.params.id}</h1>
       
           </div>

        )
    }
}

function mapStateToProps(state){
    return {
        //rentals:state.rentals.data
    }
}

export default connect(mapStateToProps)(RentalDetail);