import React, { Component } from "react";
import Avatar from "../../assets/aravind.jpeg";
import "./Profile.css";

export class ProfieShow extends Component {
  render() {
    return (
      <div>
        <div className="cards-show">
          <div className="card mt-3 mr-3 photo-card">
            <img
              src={Avatar}
              alt="..."
              className="card-img-top img-thumbnail"
            />
            <div className="card-body">
              <h5 className="cardTitle">Aravind Sreekumar</h5>
              <span className="card-text ">Software Trainee</span>
              <p className="card-text">
                <small className="text-muted">Information Technology</small>
              </p>
            </div>
          </div>
          <div className="information-cards">
            <div className="card mt-3 ml-3 mr-3 information-card email-card">
              <div className="card-body">
                <h4 className="cardTitle">Contact-information</h4>
                <div className="my-5">
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">aravind@innoventes.co</p>
                </div>
                <div className="my-5">
                  <h5 className="card-title">Mobile</h5>
                  <p className="card-text">9876543210</p>
                </div>
              </div>
            </div>
            <div className="card mt-3 ml-3 mr-3 information-card gender-card">
              <div className="card-body">
                <h4 className="card-title cardTitle">About</h4>
                <div className="my-5">
                  <h5 className="card-title">Gender</h5>
                  <p className="card-text">male</p>
                </div>
                <div className="my-5">
                  <h5 className="card-title">Maritial-status</h5>
                  <p className="card-text">Single</p>
                </div>
                <div className="my-5">
                  <h5 className="card-title">Date-Of-Birth</h5>
                  <p className="card-text">12-3-1997</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="address-data mt-3">
          <div className="card address-card">
            <div className="card-body">
              <h4 className="card-title cardTitle">Address</h4>
              <p className="card-text ">
                #2422 , 16th A main road , Kodihalli ,
              </p>
              <p className="card-text">HAL 2nd stage , Indiranagar ,</p>
              <p className="card-text">Banglore , Karnataka ,</p>
              <p className="card-text">560008</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfieShow;
