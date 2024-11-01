

import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {value: emailValue, handleInputChange:
     handleEmailchange,
      handleInputBlur: handleEmailBlur,
      hasError: emailHasError
    } =  useInput('', (value) => isEmail(value) && isNotEmpty(value));
    

    const {value: passwordValue,
       handleInputChange: handlePasswordChnage,
        handleInputBlur: handlePasswordBlur, hasError: passwordHasError}
         = useInput('', (value) => hasMinLength(value, 6));


  function handleSubmit(event) {
    event.preventDefault();

    if(emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
   /* setEnteredValues({
        email: '',
        password: '',
    });
    */

  }

 


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label='Email' id='email' type='email' name='email' onBlur={handleEmailBlur}
           onChange={handleEmailchange}
          value={emailValue}
          error={emailHasError && 'please a valid email'}
           />

        <Input label='Password'
         id='password'
         type='password'
         name='email' onChange={handlePasswordChnage}
         onBlur={handlePasswordBlur}
         value={passwordValue}
         error={passwordHasError && 'please a valid password'}
           />
       </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
