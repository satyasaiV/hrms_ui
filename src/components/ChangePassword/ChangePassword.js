import React, { Component } from "react";
import "./ChangePassword.css";

export class ChangePassword extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      isChangedPassword: false,
      passwordsNotmatch: false
    };
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.checkPasswords = this.checkPasswords.bind(this);
  };
  
  onPasswordChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  checkPasswords() {
    if (this.state.newPassword === this.state.confirmNewPassword) {
      this.setState({ isChangedPassword: true });
    } else {
      this.setState({ passwordsNotmatch: true });
    }
  }
  render() {
    if (!this.state.isChangedPassword) {
      return (
        <div>
          <form className="card departments-card">
            <div className="card-body">
            <div className="d-flex align-items-center pr-3">
              <div>
                <h5 className="cardTitle">Edit Department</h5>
              </div>
            </div>
            <div className="input-group mb-3 data-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Currentpassword
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="currentPassword"
                id="currentPassword"
                onChange={this.onPasswordChange}
                value={this.state.currentPassword}
              />
            </div>
            <div className="input-group mb-3 data-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Newpassword
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="newPassword"
                id="newPassword"
                onChange={this.onPasswordChange}
                value={this.state.newPassword}
              />
            </div>
            <div className="input-group mb-3 data-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Confirmnewpassowrd
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="confirmNewPassword"
                id="confirmNewPassword"
                onChange={this.onPasswordChange}
                value={this.state.confirmNewPassword}
              />
            </div>
            <button
              type="button"
              className="btn btn-success save-button"
              onClick={this.checkPasswords}
            >
              ChangePassword
            </button>
            </div>
          </form>
          <div className="alert-message">
            {this.state.passwordsNotmatch && (
              <p className="fields-empty-error">
                Newpassword doesn't match with confirm newPassword
              </p>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="success-message">
          <h5>Password Changed Succesfully</h5>
        </div>
      );
    }
  }
}

export default ChangePassword;
