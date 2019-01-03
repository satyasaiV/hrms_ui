import React, { Component } from "react";
import "./EmpDashboard.css";

import {
  faBullhorn,
  faClipboardList,
  faIdCard,
  faUserPlus,
  faBuilding,
  faDesktop
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EmpDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: [
        { designation: "Product Management", id: 1203 },
        { designation: "Developer", id: 1204 },
        { designation: "UI developer", id: 1205 }
      ],
      announcements: [
        {
          id: 1,
          announcement: "December 25th is declared as restricted Holiday",
          postedBy: "Geetha Nair"
        },
        {
          id: 2,
          announcement:
            "Sachin and Satyasai are started journey in Innoventes, welcome both",
          postedBy: "Raghuram"
        },
        {
          id: 3,
          announcement:
            "Nabajyothi got appreciation from Phonepe for his recent work",
          postedBy: "Raghuram"
        },
        {
          id: 4,
          announcement:
            "Need Volunteers for interviews to do technical interviews",
          postedBy: "Umasuthan"
        },
        {
          id: 5,
          announcement: "December 25th is declared as restricted Holiday",
          postedBy: "Ramanan"
        },
        {
          id: 6,
          announcement: "December 25th is declared as restricted Holiday",
          postedBy: "Umasuthan"
        }
      ],
      toDoList: [
        { id: 1, todo: "Issue 23 has to be cleared", milestone: "Milestone1" },
        { id: 2, todo: "Issue 15 has to close", milestone: "Milestone2" },
        {
          id: 3,
          todo: "changes has to made in Dashboard",
          milestone: "Milestone1"
        },
        {
          id: 4,
          todo: "make sure the departments API is in progress ",
          milestone: "Milestone4"
        },
        {
          id: 5,
          todo: "Ppt has to be prepared for the sprint",
          milestone: "Milestone4"
        },
        { id: 6, todo: "Things to clear in issue #45", milestone: "Milestone3" }
      ]
    };
  }

  render() {
    return (
      <div className="main">
        <div className="row my-4">
          <div className="col-lg-3 col-sm-12">
            <div className="p-3 card dash-card designation-card">
              <h5 className="card-title">
                <FontAwesomeIcon
                  icon={faIdCard}
                  className="mr-2 announcement-icon"
                />
                Emplyee Id
              </h5>
              <div className="card-text text-right mt-3">INVTS023</div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="p-3 card dash-card employee-card">
              <h5 className="card-title">
                <FontAwesomeIcon
                  icon={faUserPlus}
                  className="mr-2 announcement-icon"
                />
                Desgination
              </h5>
              <div className="card-text text-right mt-3">Software Engineer</div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="p-3 card dash-card department-card">
              <h5 className="card-title">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="mr-2 announcement-icon"
                />
                Department
              </h5>
              <div className="card-text text-right mt-3">
                Information Technology
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="p-3 card dash-card project-card">
              <h5 className="card-title">
                <FontAwesomeIcon
                  icon={faDesktop}
                  className="mr-2 announcement-icon"
                />
                CurrentProject
              </h5>
              <div className="card-text text-right mt-3">Namaste Credit</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card announcements">
              <div className="d-flex align-items-center p-3 headi">
                <div>
                  <div>
                    <FontAwesomeIcon
                      icon={faBullhorn}
                      className="mr-2 announcement-icon"
                    />
                    Announcements
                  </div>
                </div>
              </div>
              <div className="card-body">
                <table className="no-wrap v-middle table">
                  <tbody>
                    {this.state.announcements.map((dept, index) => (
                      <tr key={dept.id}>
                        <td>{index + 1}</td>
                        <td>{dept.announcement}</td>
                        <td className="posted-by">{dept.postedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card announcements">
              <div className="d-flex align-items-center p-3 headi">
                <div>
                  <div>
                    <FontAwesomeIcon
                      icon={faClipboardList}
                      className="mr-2 announcement-icon"
                    />
                    To Do List
                  </div>
                </div>
              </div>
              <div className="card-body">
                <table className="no-wrap v-middle table">
                  <tbody>
                    {this.state.toDoList.map((dept, index) => (
                      <tr key={dept.id}>
                        <td>{index + 1}</td>
                        <td>{dept.todo}</td>
                        <td className="posted-by">{dept.milestone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmpDashboard;
