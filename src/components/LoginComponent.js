import React from 'react';

const Login = () => {
    return (
        <div>
        
        <section className="row container">
  		<div className="grid">

  		
      <section className="teaser">
      <h1 align="center">Sign in</h1>
        <input type='checkbox' id='form-switch'/>
          <form id='login-form' action="" method='post'>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <button type='submit'>Sign in</button>
            <label for='form-switch'><span>Sign up</span></label>
          </form>
          <form id='register-form' action="" method='post'>
            <input type="text" placeholder="Username" required/>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <input type="password" placeholder="Re-enter Password" required/>
            <button type='submit'>Sign up</button>
            <label for='form-switch'>Already Member ? Sign In Now..</label>
          </form>

      </section>


      </div>
    </section>


    </div>
    );
}

export default Login;
