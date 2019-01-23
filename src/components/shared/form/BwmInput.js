import React from 'react';
export const BwmInput = ({
    input,
    label,
    type,
    className,
    meta: { touched, error, warning }
  }) => (
    <div className ='form-group'>
      <label>{label}</label>
      <div className ='input-group'>
        <input {...input} placeholder={label} type={type}  className={className}/>
      </div> 
        {touched &&
          ((error && <div className ='aler alert-danger'>{error}</div>))}
      
    </div>
  )