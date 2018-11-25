import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

const Specials = ({ match }) => {
    return (
        <div>
        <section className="row container">
  		<div className="grid">

  		<section className="teaser">
        <h1 align="center">Today's specials</h1>
        <img className="center" src="images/food25.jpg" alt="Professional Speaker"/>
          <h5 align="center">South Street Chicken Wings</h5>
          <p align="center">World food recipes. This planet of ours has some mind-blowing flavours and surprises and we have recipes from all the corners of it. Try our Smokey peach chipotle barbecue sauce, smothered crispy chicken wings</p>
          <a className="btn2 btn2-alt" href="Order">Order</a>
        
      </section>

      </div>
    </section>

        </div>
    );
}

export default Specials;
