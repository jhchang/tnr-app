import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  function onButtonClick() {
    setIsSubmit(!isSubmit);
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder='Enter your email here'
          onChange={ev => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className='errorLabel'>{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder='Enter your password here'
          onChange={ev => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className='errorLabel'>{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          className={'inputButton'}
          type='button'
          onClick={() => onButtonClick()}
          value={'Log in'}
        />
      </div>
      {isSubmit && (
        <div>
          <p>You've submitted {email} as your email</p>{' '}
          <p>You've submitted {password} as your password</p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
