import React, { Component } from "react";
import "../Layout/Layout.css";
import logoLayout from "../../assets/logo.png";
import Avatar from "../../assets/aravind.jpeg";

import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { Departments } from "../Departments/Departments";
import { ChangePassword } from "../ChangePassword/ChangePassword";
import EmpDashboard from "../Dashboard/EmpDashboard";
import { AddDepartment } from "../Departments/AddDepartment";
import { EditDepartment } from "../Departments/EditDepartment";
import { ProfieShow } from "../Profile/ProfieShow";
import { faTachometerAlt, faThLarge ,faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Employee from "../Hr/Employee";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName : "Aravind Sreekumar",
      toggle : false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ toggle: !this.state.toggle });
  }
  render() {
    const drawer = (
      <div className="nav">
        <div className="sidebar">
          <div className="logoContainer">
            <img src={logoLayout} className="logoLayout" alt="logo" />
          </div>
          <div className="menuItemContainer">
            <div className="menuItem">
              <ul className="listItemContainer">
                <li className="listItem">
                  <NavLink
                    activeClassName="active"
                    to="/dashboard"
                    className="menuButton"
                    onClick={this.toggle.bind(this)}
                  >
                    <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
                    Dashboard
                  </NavLink>
                </li>
                <li className="listItem">
                  <NavLink
                    activeClassName="active"
                    to="/departments"
                    className="menuButton"
                    onClick={this.toggle.bind(this)}
                  >
                    <FontAwesomeIcon icon={faThLarge} className="mr-3" />
                    Departments
                  </NavLink>
                </li>
                <li className="listItem">
                <NavLink activeClassName="active" 
                to="/employee" 
                className="menuButton" 
                onClick = {this.toggle.bind(this)}>
                <FontAwesomeIcon icon={faUsers} className="mr-3" />
                Employee
                </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <div className="header">
          <label id="toggle" className="menuBar" onClick={this.toggle}>
            &#9776;
          </label>
          <div className="account-container">
            <div
              class="account-container dropdown-toggle"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="mr-1">
                <img
                  src={Avatar}
                  alt="..."
                  className="img-thumbnail rounded-circle img-icon"
                />
              </div>
              <div>
                <span className="employee-name">{this.state.employeeName}</span>
              </div>
            </div>
            <div class="dropdown-menu mt-1" aria-labelledby="dropdownMenuLink">
              <NavLink
                activeClassName="active"
                to="/changePassword"
                className="accountButton"
                onClick={this.toggle.bind(this)}
              >
                ChangePassword
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/profile"
                className="accountButton"
                onClick={this.toggle.bind(this)}
              >
                Profile
              </NavLink>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="flex">
          <div className="navbarCollapse">{drawer}position</div>
          {this.state.toggle && <div className="nav body">{drawer}</div>}
        </div>
        <div className="clearfix" />
        <main>
          <div className="bodyContent">
          <Route exact path="/" component={EmpDashboard}/>
          <Route exact path="/dashboard" component={EmpDashboard}/>
          <Route exact path="/profile" component={ProfieShow} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/departments/add" component={AddDepartment} />
          <Route exact path="/departments/edit/:id" component={EditDepartment} />
          <Route exact path="/changepassword" component={ChangePassword} />
          <Route exact path="/employee" component={Employee} />
          </div>
        </main>
        <div className="footer">
          <span className="footTitle">
            All Rights Reserved by
            <span className="hilight ml-1">Innoventes</span>
          </span>
        </div>
      </div>
    );
  }
}
export default Layout;
