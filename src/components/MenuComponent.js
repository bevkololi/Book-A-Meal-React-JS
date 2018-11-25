import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

const Menu = ({ match }) => {
    return (
        <div>
        <section className="row login container">
      <div className="grid">

      
      <section className="teaser col-1-2">
        <a href="Order">
        <img src="images/food3.jpg" alt="Professional Speaker"/>
          <h5>Baked potato.</h5>
          <p>World food recipes. This planet of ours has some mind-blowing flavours and surprises and we have recipes from all the corners of it</p>
          <a align= "center" className="btn1 btn1-alt" href="Order">Order</a>
        </a>
      </section>
      
      <section className="teaser col-1-2">
        <a href="Order">
        <img src="images/food4.jpg" alt="Professional Speaker"/>
          <h5>Burger</h5>
          <p>World food recipes. This planet of ours has some mind-blowing flavours and surprises and we have recipes from all the corners of it</p>
          <a align= "center" className="btn1 btn1-alt" href="Order">Order</a>
        </a>
      </section>


      

      <section className="teaser col-1-2">
        <a href="Order">
        <img src="images/food5.jpg" alt="Professional Speaker"/>
          <h5>Casserole</h5>
          <p>World food recipes. This planet of ours has some mind-blowing flavours and surprises and we have recipes from all the corners of it</p>
          <a align= "center" className="btn1 btn1-alt" href="Order">Order</a>
        </a>
        </section>
        
        <section className="teaser col-1-2">
        <a href="Order">
        <img src="images/food6.jpg" alt="Professional Speaker"/>
          <h5>Chicken meat</h5>
          <p>World food recipes. This planet of ours has some mind-blowing flavours and surprises and we have recipes from all the corners of it</p>
          <a align= "center" className="btn1 btn1-alt" href="Order">Order</a>
        </a>
       
      </section>


      

      <section className="teaser col-1-2">
        <a href="Order">
        <img src="images/food7.jpg" alt="Professional Speaker"/>
          <h5>Lamb and mutton</h5>
          <p>World food recipes. This planet of ours has some mind-blowing flavours and surprises and we have recipes from all the corners of it</p>
          <a align= "center" className="btn1 btn1-alt" href="Order">Order</a>
        </a>
        </section>
        
        <section className="teaser col-1-2">
        <a href="Order">
        <img src="images/food8.jpg" alt="Professional Speaker"/>
          <h5>French fries</h5>
          <p>World food recipes. This planet of ours has some mind-blowing flavours and surprises and we have recipes from all the corners of it</p>
          <a align= "center" className="btn1 btn1-alt" href="Order">Order</a>
        </a>
      </section>


      

      <section className="teaser col-1-2">
        <a href="Order">
        <img src="images/food9.jpg" alt="Professional Speaker"/>
          <h5>Hamburger</h5>
          <p>World food recipes. This planet of ours has some mind-blowing flavours and surprises and we have recipes from all the corners of it</p>
          <a align= "center" class="btn1 btn1-alt" href="Order">Order</a>
        </a>
      </section>
      
      <section className="teaser col-1-2">
        <a href="Order">
        <img src="images/food10.jpg" alt="Professional Speaker"/>
          <h5>Duckmeat</h5>
          <p>World food recipes. This planet of ours has some mind-blowing flavours and surprises and we have recipes from all the corners of it</p>
          <a align= "center" class="btn1 btn1-alt" href="Order">Order</a>
        </a>
        </section>


    </div>
  </section>


        </div>
    );
}

export default Menu;
