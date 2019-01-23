import React, { Component } from 'react';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import 'App.css';

import Header from 'components/shared/Header';
import {init} from './reducers';
import RentalListing from 'components/rental/rental-listing/RentalListing';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';
import Login from './components/login/Login';
import {Register} from './components/register/Register';

import { ProtectedRoute } from 'components/shared/auth/ProtectedRoute';
import { LoggedInRoute } from 'components/shared/auth/LoggedInRoute';

import * as actions from 'actions';

const store = init();

class App extends Component {
  componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState() {
    store.dispatch(actions.checkAuthState());
  }

  logout() {
    store.dispatch(actions.logout());
  }
  
  render() {
    return (
      <Provider store= {store}> 
        <BrowserRouter>
          <div className="App">
            <Header logout={this.logout}/>

            <div className = "container">
                <Route exact path='/' render ={()=>{return <Redirect to ='/rentals'/>}}/>
                <Route exact path="/rentals" component ={RentalListing}/>
                <LoggedInRoute exact path="/login" component ={Login}/>
                <Route exact path="/register" component ={Register}/>
                <ProtectedRoute exact path="/rentals/:id" component ={RentalDetail}/>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
