import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
export default class SideNavBar extends Component {
  render() {
    return (
      <div className="main-menu">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="menu-container">
          <nav>
            <ul>
              <li>
                <i className="fa fa-home"></i>
                <Link to="/" activeClassName="active">
                  Accueil
                </Link>
              </li>
              <li>
                <i className="fa fa-wrench"></i>
                <Link to="/planmaintenance">Planning de maintenance</Link>
              </li>
              <li>
                <i className="fa fa-calendar"></i>
                <a href="#">Calendrier</a>
              </li>
              <li>
                <i className="fa fa-bar-chart"></i>
                <a href="#">Tableau de bord</a>
              </li>
              <li>
                <i className="fa fa-cog"></i>
                <a href="#">Parametres</a>
              </li>
              <li>
                <i className="fa fa-question"></i>
                <a href="#">Aide</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
