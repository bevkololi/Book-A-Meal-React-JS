import React, { Component } from 'react';
import '../styles/App.css';


const Home = () => {
    return (
    
    <div>
 	
     

<div className="fling-minislide">
  <img src="images/food24.jpg" alt="Slide 6" />
  <img src="images/food22.jpg" alt="Slide 5" />
  <img src="images/food27.jpg" alt="Slide 4" />
  <img src="images/food26.jpg" alt="Slide 3" />
  <img src="images/food23.jpg" alt="Slide 2" />
  <img src="images/food25.jpg" alt="Slide 1" />
</div>

	
	<section className="hero container">
		<h2>Hello food lovers!</h2>
		<p>Whatever your occasion, we make it one to remember.</p>
		<p>Order finger licking meals on our website for fast and efficient delivery</p>
		<a className="btn btn-alt" href="Register">Sign up</a>
	</section>

	
  	<section className="row">
  		<div className="grid">

  		

  		<section className="teaser col-1-3">
          <a href="Specials">
          <img src="images/food5.jpg" alt="Food photo"/>
  				<h5>Today's specials</h5>
  				<h3>Get a glimpse of today's delicious specials by the chef.</h3>
  			</a>
  			<p>“First we eat, then we do everything else.” -M.F.K. Fisher</p> 
  		</section>
          
          <section className="teaser col-1-3">
  			<a href="Menu">
              <img src="images/food3.jpg" alt="Food photo"/>
  				<h5>Menu</h5>
  				<h3>Check out our updated menu for foods of all types.</h3>
  			</a>
  			<p>"Food is our common ground, a universal experience." –James Beard</p> 
  		</section>
          
          <section className="teaser col-1-3">
          <a href="Specials">
          <img src="images/food4.jpg" alt="Food photo"/>
  				<h5>Order</h5>
  				<h3>All you have to do is sign up, sign in, and be part of this amazing experience</h3>
  			</a>
  			<p>"One of the very nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating. " –Luciano Pavarotti</p> 
  		</section>
  			
  		</div>	
  		
	</section>
    


    </div>
    );
}

export default Home;
