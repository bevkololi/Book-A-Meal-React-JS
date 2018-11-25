import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

  
const Order = ({ match }) => {
    return (
        <div>
        
        <section className="row container">
  		<div className="grid">

        
  <section className="col-2-3">

  <h2>Book a meal!</h2>
  <h5>For as low as Ksh450</h5>

  <p>We will ensure fast delivery of your meal. Sit back and relax. Let us take care of you.</p>

  <h4>Why Us?</h4>

  <ul class="why-us">
  <li>Over 30 items in the menu to chose from.</li>
    <li>Fast delivery</li>
    <li>World class chefs</li>
    <li>Affordable prizes</li>
  </ul>

</section>
<form class="col-1-3 order" action="#" method="post">
  <fieldset class="register-group">

    <label>
      Name
      <input type="text" name="name" placeholder="Full name" required/>
    </label>

    <label>
      Phone number
      <input type="contact" name="phone number" placeholder="Phone number" required/>
    </label>

    <label>
      Number of plates
      <select name="quantity" required>
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      
      </select>
    </label>

    <label>
      Special requests
      <textarea name="comments"></textarea>
    </label>

  </fieldset>
  <div class="popup" onclick="myFunction()"><input class="btn1 btn1-alt" type="submit" name="submit" value="Order"/>
  <span class="popuptext" id="myPopup"> Your order has been received!</span>
</div> 
      

  
</form>

  </div>
</section>


        </div>
    );
}

export default Order;
