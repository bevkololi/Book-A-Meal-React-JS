import React, { Component } from 'react';
import '../styles/App.css';

import Home from './HomeComponent';
import Register from './RegisterComponent';
import Login from './LoginComponent';
import Specials from './SpecialsComponent';
import Menu from './MenuComponent';
import Order from './OrderComponent';
import Manage from './ManageComponent';
import Summary from './SummaryComponent';



// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>

        <header className="primary-header container group">

    
 
<h1 className="logo"><a href="index.html">Book <br /> A <br /> Meal!</a></h1>
{/* <img className="logoimage" src="images/food14.jpg" width='10%' height='15%' alt='the logo'/> */}

<h3 className="tagline">Where food speaks with your palate.</h3>
        <nav className="nav primary-nav">

          <div className="container">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/register">Sign Up</Link></li>
              <li><Link to="/login">Sign In</Link></li>
              <li><Link to="/specials">Specials</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/order">Order</Link></li>
              <li><Link to="/manage">Manage</Link></li>
              <li><Link to="/summary">Summary</Link></li>
              
          
          </div>
      </nav>


          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/specials" component={Specials} />
            <Route path="/menu" component={Menu} />
            <Route path="/order" component={Order} />
            <Route path="/manage" component={Manage} />
            <Route path="/summary" component={Summary} /> */}
          </Switch>


        <footer className="primary-footer container group">
  		<small>&copy; Book a meal</small>
  		<nav className="nav">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/register">Sign Up</Link></li>
        <li><Link to="/login">Sign In</Link></li>
        <li><Link to="/specials">Specials</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/manage">Manage</Link></li>
        <li><Link to="/summary">Summary</Link></li>
      </nav>

	</footer>
      
        </header>
      </Router>
    );
  }
}

export default App;
