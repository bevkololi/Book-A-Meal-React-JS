import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

const Manage = ({ match }) => {
    return (
        <div>
        
        <section className="row container">
  <div className="grid">

      <section className="teaser">
        <h1 align="center">Manage your menus</h1>

          <table className="manage">
  
            <thead>
              <tr>
                <th scope="col">Meal</th>
                <th scope="col">Availability</th>
                <th scope="col">Modify</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lamb and rice</td>
                <td>Available</td>
                <td><i className="material-icons">edit</i></td>
                <td><i className="material-icons">delete</i></td>
              </tr>
              <tr>
                <td>Ugali and sukuma wiki</td>
                <td>Available</td>
                <td><i className="material-icons">edit</i></td>
                <td><i className="material-icons">delete</i></td>
              </tr>
              <tr>
                <td>Fish and chips</td>
                <td>Available</td>
                <td><i className="material-icons">edit</i></td>
                <td><i className="material-icons">delete</i></td>
              </tr>
              <tr>
                <td>Chips and chicken</td>
                <td>Available</td>
                <td><i className="material-icons">edit</i></td>
                <td><i className="material-icons">delete</i></td>
              </tr>
              <tr>
                <td>Rice and beef</td>
                <td>Available</td>
                <td><i className="material-icons">edit</i></td>
                <td><i className="material-icons">delete</i></td>
              </tr>
              <tr>
                <td>Fish and chips</td>
                <td>Available</td>
                <td><i className="material-icons">edit</i></td>
                <td><i className="material-icons">delete</i></td>
              </tr>
              <tr>
                <td>Chips and chicken</td>
                <td>Available</td>
                <td><i className="material-icons">edit</i></td>
                <td><i className="material-icons">delete</i></td>
              </tr>
            </tbody>
          </table>


<input class="btn2 btn2-alt" type="submit" name="submit" value="Add Meal"/>


    </section>

  </div>
</section>

        </div>
    );
}

export default Manage;
