import React, { Component } from "react";
import axios from "axios";
import * as Constants from "../../Constant";

const URL = Constants.URL;

export class EditDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentName: "",
      departmentCode: "",
      departmentId: "",
      createdBy: "",
      lastUpdatedBy: "",
      error: false,
      errorMessage: ""
    };
    this.HandleOnChange = this.handleOnChange.bind(this);
    this.save = this.save.bind(this);
  }
  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async save() {
    await axios
      .put(URL + "/ref/departments/" + this.state.departmentId + "/", {
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
  componentDidMount() {
    this.getEditdata();
  }
  getEditdata() {
    axios
      .get(URL + "/ref/departments/" + this.props.match.params.id + "/")
      .then(res =>
        this.setState({
          departmentId: res.data.id,
          departmentCode: res.data.department_code,
          departmentName: res.data.department_name,
          createdBy: res.data.created_by,
          lastUpdatedBy: res.data.last_updated_by
        })
      )
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
            <div className="d-flex align-items-center pr-3">
              <div>
                <h5 className="cardTitle">Edit Department</h5>
              </div>
            </div>
            <div className="input-group mb-3 data-group input-width">
              <div className="input-group-prepend">
                <span
                  className="input-group-text label-width"
                  id="basic-addon1"
                >
                  {" "}
                  Department Name{" "}
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="departmentName"
                id="departmentName"
                onChange={this.HandleOnChange}
                value={this.state.departmentName}
              />
            </div>
            <div className="input-group mb-3 data-group input-width">
              <div className="input-group-prepend">
                <span
                  className="input-group-text label-width"
                  id="basic-addon1"
                >
                  {" "}
                  Department Id{" "}
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="departmentId"
                id="departmentId"
                disabled
                value={this.state.departmentId}
              />
            </div>
            <div className="input-group mb-3 data-group input-width">
              <div className="input-group-prepend">
                <span
                  className="input-group-text label-width"
                  id="basic-addon1"
                >
                  {" "}
                  Department Code{" "}
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="departmentCode"
                id="departmentCode"
                onChange={this.HandleOnChange}
                value={this.state.departmentCode}
              />
            </div>
            <button
              className="btn btn btn-success save-button"
              type="button"
              onClick={this.save}
            >
              Save Changes{" "}
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

export default EditDepartment;
