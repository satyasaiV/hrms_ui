import React, { Component } from "react";
import axios from "axios";
import * as Constants from "../../Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const URL = Constants.URL;

export class AddDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentName: "",
      departmentCode: "",
      createdBy: "vijay",
      lastUpdatedBy: "vijay",
      error: false,
      errorMessage: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.addDepartment = this.addDepartment.bind(this);
    this.showDepartments = this.showDepartments.bind(this);
  }
  showDepartments() {
    this.props.history.push("/departments");
  }
  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async addDepartment() {
    await axios
      .post(URL + "/ref/departments/", {
        department_name: this.state.departmentName,
        department_code: this.state.departmentCode,
        created_by: this.state.createdBy,
        last_updated_by: this.state.lastUpdatedBy
      })
      .then(res => this.props.history.push("/departments"))
      .catch(err => {
        if (err.response) {
          this.setState({ error: true, errorMessage: err.response.statusText });
        } else {
          this.setState({ error: true, errorMessage: err.message });
        }
      });
  }
  render() {
    return (
      <div>
        <form className="card mt-5 departments-list">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div>
                <h5 className="cardTitle">Add Department</h5>
              </div>
              <div className="ml-auto d-flex no-block align-items-center">
                <div className="float-button" onClick={this.showDepartments}>
                  <FontAwesomeIcon icon={faBars} className="add-icon" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3 mt-3 data-group input-width">
              <div className="input-group-prepend">
                <span
                  className="input-group-text label-width"
                  id="basic-addon1"
                >
                  Department Name
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="departmentName"
                id="departmentName"
                onChange={this.handleOnChange}
                value={this.state.departmentName}
              />
            </div>
            <div className="input-group mb-3 mt-3 data-group input-width">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Department Code
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="departmentCode"
                id="departmentCode"
                onChange={this.handleOnChange}
                value={this.state.departmentCode}
              />
            </div>
            <button
              type="button"
              className="btn btn btn-success save-button"
              onClick={this.addDepartment}
            >
              Add
            </button>
          </div>
        </form>
        {this.state.error && (
          <div className="snackbar"> {this.state.errorMessage} </div>
        )}
      </div>
    );
  }
}

export default AddDepartment;
