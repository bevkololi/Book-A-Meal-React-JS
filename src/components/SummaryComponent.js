import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

const Summary = ({ match }) => {
    return (
        <div>

        <section className="row container">
  		<div className="grid">

<table>
  <thead>
    <tr>
      <th scope="row">
        Today's orders
      </th>
      <td colspan="2">
        April 17th
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <time datetime="08:30:00">8:30 AM</time>
      </th>
      <td colspan="2">
        <h4>Bill gates</h4>
          <p>Strawberry Sorbet – Hidden Valley Fruit Farm strawberries, shortbread crumb, and cream</p>
        <h4>Will Howe</h4>
          <p>Deviled Eggs – Baffoni Farm egg, bacon lardon, and crispy shallots.</p>
        <h4>Bev Kololi</h4>
          <p>Short Ribs – Soy-braised Blackbird Farm short ribs, shiitake and snap pea risotto.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">
        <time datetime="09:00:00">9:00 AM</time>
      </th>
      <td>
        
          <h4>Chun Li</h4>
          <p>Blistered Shishito Peppers – Bite-sized mild peppers with grilled lemon and flake salt.</p>
          <h4>Elvis Presley</h4>
          <p>South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings.</p>
          
        
      </td>
      
    </tr>
    <tr>
      <th scope="row">
        <time datetime="12:30:00">12:30 PM</time>
      </th>
      <td colspan="2">
        <h4>Roy Kololi</h4>
          <p>Grandma Dot’s Kickin’ Cornbread – Sweet summer corn, stone-ground cornmeal, and a touch of jalapeno. </p>
                       
      </td>
    </tr>
    <tr>
      <th scope="row">
        <time datetime="14:00">2:00 PM</time>
      </th>
      <td>
        
          <h4>Tessa Harmon</h4>
          <p>Pork Chop – Served with apple braised cabbage and jus.</p>
          <h4>Edward Hill</h4>
          <p>Chocolate Cake – Served with raspberries and whipped cream.</p>
          <h4>James Bay</h4>
          <p>Wood-Fire-Grilled Pork Chop – Double-cut, bone-in Berkshire pork chop, sweet & sour braised cabbage, apple cider jus.</p>
            
      </td>
      <td>
        
          <h4>Josh Williams</h4>
          <p>5-Layer Chocolate Cake – Espresso-soaked chocolate sponge cake, milk chocolate ganache filling, raspberry coulis, and fluffy whipped cream.</p>
          <h4>Jane Doe</h4>
          <p>Strawberry Sorbet – Hidden Valley Fruit Farm strawberries, shortbread crumb, and cream</p>

      </td>
      
    </tr>
  </tbody>

  <thead>
    <tr>
      <th scope="row">
        Past orders
      </th>
      <td colspan="2">
        April 16th
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <time datetime="08:30:00">8:30 AM</time>
      </th>
      <td colspan="2">
        <h4>Lucy Khal</h4>
          <p>Deviled Eggs – Baffoni Farm egg, bacon lardon, and crispy shallots</p>
        
      </td>
    </tr>
    <tr>
      <th scope="row">
        <time datetime="09:00:00">9:00 AM</time>
      </th>
      <td>
        
          <h4>Nick Cannon</h4>
          <p>Grandma Dot’s Kickin’ Cornbread – Sweet summer corn, stone-ground cornmeal, and a touch of jalapeno.</p>
          <h4>Kim Kardashian</h4>
          <p>Blistered Shishito Peppers – Bite-sized mild peppers with grilled lemon and flake salt</p>
        
        
      </td>
      
    </tr>
    <tr>
      <th scope="row">
        <time datetime="12:30:00">12:30 PM</time>
      </th>
      <td colspan="2">
        <h4>Tessa Harmon</h4>
          <p>Pork Chop – Served with apple braised cabbage and jus.</p>
          <h4>Edward Hill</h4>
          <p>Chocolate Cake – Served with raspberries and whipped cream.</p>
          <h4>James Bay</h4>
          <p>Wood-Fire-Grilled Pork Chop – Double-cut, bone-in Berkshire pork chop, sweet & sour braised cabbage, apple cider jus.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">
        <time datetime="14:00">2:00 PM</time>
      </th>
      <td>
        
          <h4>Tessa Harmon</h4>
          <p>Pork Chop – Served with apple braised cabbage and jus.</p>
          <h4>Edward Hill</h4>
          <p>Chocolate Cake – Served with raspberries and whipped cream.</p>
          <h4>James Bay</h4>
          <p>Wood-Fire-Grilled Pork Chop – Double-cut, bone-in Berkshire pork chop, sweet & sour braised cabbage, apple cider jus.</p>
              
      </td>
      <td>
        
          <h4>Tessa Harmon</h4>
          <p>Pork Chop – Served with apple braised cabbage and jus.</p>
          <h4>Edward Hill</h4>
          <p>Chocolate Cake – Served with raspberries and whipped cream.</p>
          <h4>James Bay</h4>
          <p>Wood-Fire-Grilled Pork Chop – Double-cut, bone-in Berkshire pork chop, sweet & sour braised cabbage, apple cider jus.</p>
      </td>
      
    </tr>
  </tbody>

  <thead>
    <tr>
      <th scope="row">
        Past orders
      </th>
      <td colspan="2">
        April 15th
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <time datetime="08:30:00">8:30 AM</time>
      </th>
      <td colspan="2">
        <h4>Tessa Harmon</h4>
          <p>Pork Chop – Served with apple braised cabbage and jus.</p>
          <h4>Edward Hill</h4>
          <p>Chocolate Cake – Served with raspberries and whipped cream.</p>
          <h4>James Bay</h4>
          <p>Wood-Fire-Grilled Pork Chop – Double-cut, bone-in Berkshire pork chop, sweet & sour braised cabbage, apple cider jus.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">
        <time datetime="09:00:00">9:00 AM</time>
      </th>
      <td>
        
          <h4>Tessa Harmon</h4>
          <p>Pork Chop – Served with apple braised cabbage and jus.</p>
          <h4>Edward Hill</h4>
          <p>Chocolate Cake – Served with raspberries and whipped cream.</p>
          <h4>James Bay</h4>
          <p>Wood-Fire-Grilled Pork Chop – Double-cut, bone-in Berkshire pork chop, sweet & sour braised cabbage, apple cider jus.</p>
      </td>
      <td>
        
          <h4>Edward Hill</h4>
          <p>Chocolate Cake – Served with raspberries and whipped cream.</p>
          <h4>James Bay</h4>
          <p>Wood-Fire-Grilled Pork Chop – Double-cut, bone-in Berkshire pork chop, sweet & sour braised cabbage, apple cider jus.</p>
        
      </td>
    </tr>
    <tr>
      <th scope="row">
        <time datetime="12:30:00">12:30 PM</time>
      </th>
      <td colspan="2">
        <h4>Edward Hill</h4>
          <p>Chocolate Cake – Served with raspberries and whipped cream.</p>
          <h4>James Bay</h4>
          <p>Wood-Fire-Grilled Pork Chop – Double-cut, bone-in Berkshire pork chop, sweet & sour braised cabbage, apple cider jus.</p>
                    
      </td>
    </tr>
    <tr>
      <th scope="row">
        <time datetime="14:00">2:00 PM</time>
      </th>
      <td>
        
          <h4>Bill gates</h4>
          <p>Strawberry Sorbet – Hidden Valley Fruit Farm strawberries, shortbread crumb, and cream</p>
        <h4>Will Howe</h4>
          <p>Deviled Eggs – Baffoni Farm egg, bacon lardon, and crispy shallots.</p>
        <h4>Bev Kololi</h4>
          <p>Short Ribs – Soy-braised Blackbird Farm short ribs, shiitake and snap pea risotto.</p>     
      </td>          
    </tr>
  </tbody>
</table>
      </div>
    </section>
        </div>
    );
}

export default Summary;
