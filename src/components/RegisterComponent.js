import React from 'react';

const Register = () => {
    return (
        <div>
        
        <section className="row container">
  		<div className="grid">

  		
      <section className="teaser">
      <h1 align="center">Sign up</h1>
        <input type='checkbox' id='form-switch'/>
          <form id='login-form' action="" method='post'>
            <input type="text" placeholder="Username" required/>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <input type="password" placeholder="Re Password" required/>
            <button type='submit'>Sign up</button>
            <label for='form-switch'>Alredy signed up? Sign in!</label>
          </form>
          <input type='checkbox' id='form-switch'/>
          <form id='register-form' action="" method='post'>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <button type='submit'>Sign in</button>
            <label for='form-switch'><span>Sign up</span></label>
          </form>
          

      </section>

      </div>
    </section>
    </div>
    );
}

export default Register;
