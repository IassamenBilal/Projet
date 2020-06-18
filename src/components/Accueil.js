import React, { Component } from "react";
import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";
import img from "../img/280px-GBC180_001.png";

export default class Accueil extends Component {
  render() {
    return (
      <div className="content">
        <TopNavBar />
        <SideNavBar />
        <div className="section">
          <div className="info-container">
            <div className="car-container">
              <div className="text-container">
                <p>
                  <i className="fa fa-wrench"></i>Maintenance preventive
                </p>
                <p>
                  <i className="fa fa-calendar-check-o"></i>Mardi 24 fervrier
                </p>
                <p>
                  <i className="fa fa-life-ring"></i>1000 km en marche
                </p>
                <p>
                  <i className="fa fa-wrench"></i>Remplacement des roues
                </p>
              </div>
              <div className="img-container">
                <img src={img} alt="car image" />
              </div>
            </div>
            <div className="car-container">
              <div className="text-container">
                <p>
                  <i className="fa fa-wrench"></i>Maintenance preventive
                </p>
                <p>
                  <i className="fa fa-calendar-check-o"></i>Mardi 24 fervrier
                </p>
                <p>
                  <i className="fa fa-life-ring"></i>1000 km en marche
                </p>
                <p>
                  <i className="fa fa-wrench"></i>Remplacement des roues
                </p>
              </div>
              <div className="img-container">
                <img src={img} alt="car image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
