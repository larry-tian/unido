import React, { Component } from 'react'; 
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {

  render() {

    return(
      <div>
          <nav>
              <ul>
                <div className="container">
                  <div className="row">

                    <div className="col d-flex">
                      <li><NavLink to="/content" aria-label="Change Goal"><img className="nav-dim" src="./img/logo.png" alt="Animal Forest logo"/></NavLink></li>
                    </div>

                    <div className="col-3 d-flex"></div>
                        <div className="col d-flex pt-2">
                            <li><NavLink to="/" aria-label="Change Goal">Change Goal</NavLink></li>
                            <li><NavLink to="/user" aria-label="User Profile">User Profile</NavLink></li>
                        </div> 
                  </div>
                </div>
              </ul>
          </nav>
      </div>
    );
  }
}

