import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { BwmInput} from '../shared/form/BwmInput';
import { BwmResError } from 'components/shared/form/BwmResError';


const RegisterForm = props => {
  const { handleSubmit, pristine, submitting,onSubmitCb,valid,errors} = props
  return (
    <form onSubmit={handleSubmit(onSubmitCb)}>
  
         <Field
            name="username"
            type="text"
            className='form-control'
            label="Username"
            component={BwmInput}
          />
     
          <Field
            name="email"
             type="email"
            label="Email"
            className='form-control'
            component={BwmInput}
          />
      
       
          <Field
            name="password"
            type="password"
            label="Password"
            className='form-control'
            component={BwmInput}
          />
    
          <Field
            name="passwordConfirmation"
            type="password"
            label="Password Confirmation"
            className='form-control'
            component={BwmInput}
          />
    
    
        <button  className='btn btn-bwm btn-form' type="submit" disabled={!valid||pristine || submitting}>
          Submit
        </button>
        <BwmResError errors={errors} />

    </form>
  )
}

const validate = values => {
    const errors = {}
    if (values.username && values.username.length < 4){
      errors.username = 'Must be 4 characters or more'
    }
    if (!values.email) {
      errors.email = 'Email address Required'
    } 
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.password) {
      errors.password = 'Password Required'
    } 

    if (!values.passwordConfirmation) {
        errors.apasswordConfirmationge = 'Confirmation Password Required'
      }
    if (values.passwordConfirmation !== values.password) {
        errors.passwordConfirmation = 'Paswwords must be same';
      }


    return errors
  }
  

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  validate
})(RegisterForm)
          