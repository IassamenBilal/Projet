import React, { Component } from "react";
import imgProfile from "../img/Avatar.jpg";

export default class TopNavBar extends Component {
  render() {
    return (
      <div className="profile">
        <form className="form-inline">
          <i
            className="fa fa-search "
            style={{ color: "#333347" }}
            aria-hidden="true"
          ></i>
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="profile-name mr-4">
          <a href="#">Iassamen Bilal</a>
          <img src={imgProfile} alt="profile img" />
        </div>
      </div>
    );
  }
}
