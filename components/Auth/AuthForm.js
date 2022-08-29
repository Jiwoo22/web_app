import { useState } from 'react';
import Button from '../ui/Button';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form className={classes.auth_form}>
        <div className={classes.control}>
          <input type='email' id='email' placeholder='Email' required />
        </div>
        <div className={classes.control}>
          <input type='password' id='password' placeholder='Password' required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Log in' : 'Continue'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
