import React, { Component } from "react";
import "./Departments.css";
import * as Constants from "../../Constant";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const URL = Constants.URL;

export class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      error: false,
      errorMessage: ""
    };
    this.showAddDepartment = this.showAddDepartment.bind(this);
    this.showEditDepartment = this.showEditDepartment.bind(this);
    this.removeDepartment = this.removeDepartment.bind(this);
  }
  componentDidMount() {
    axios
      .get(URL + "/ref/departments/")
      .then(res => {
        console.log(res);
        this.setState({ departments: res.data });
      })
      .catch(err => {
        if (err.response) {
          this.setState({ error: true, errorMessage: err.response.statusText });
        } else {
          this.setState({ error: true, errorMessage: err.message });
        }
      });
  }
  showAddDepartment() {
    this.props.history.push("/departments/add");
  }
  showEditDepartment(id) {
    this.props.history.push("/departments/edit/" + id);
  }
  async removeDepartment(id) {
    if (window.confirm("Are you sure you want to delete?") === true) {
      await axios.delete(URL + "/ref/departments/" + id + "/").catch(err => {
        if (err.response) {
          this.setState({ error: true, errorMessage: err.response.statusText });
        } else {
          this.setState({ error: true, errorMessage: err.message });
        }
      });
      const updatedDepartments = this.state.departments.filter(
        d => d.id !== id
      );
      this.setState({ departments: updatedDepartments });
    }
  }
  render() {
    return (
      <div>
        <div className="card mt-5 departments-list">
          <div className="card-body">
            <div className="d-flex align-items-center pr-3">
              <div>
                <h5 className="cardTitle">Departments</h5>
              </div>
              <div className="ml-auto d-flex no-block align-items-center">
                <div className="float-button" onClick={this.showAddDepartment}>
                  <FontAwesomeIcon icon={faPlus} className="add-icon" />
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="no-wrap v-middle table">
                <thead>
                  <tr className="border-0">
                    <th className="border-0">S.no</th>
                    <th className="border-0">Department Name</th>
                    <th className="border-0">Department code</th>
                    <th className="border-0">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.departments.map((dept, index) => (
                    <tr key={dept.id}>
                      <td>{index + 1}</td>
                      <td>{dept.department_name}</td>
                      <td>{dept.department_code}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="edit-icon"
                          onClick={() => this.showEditDepartment(dept.id)}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="delete-icon ml-3"
                          onClick={() => this.removeDepartment(dept.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {this.state.error && (
          <div className="snackbar"> {this.state.errorMessage} </div>
        )}
      </div>
    );
  }
}

export default Departments;
