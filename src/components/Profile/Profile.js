import React, { Component } from "react";
import "./Profile.css";
import Avatar from "../../assets/aravind.jpeg";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "Aravind",
      Lastname: "Sreekumar",
      Email: "aravind@innoventes.co",
      Gender: "Male",
      DateOfBirth: "12-3-1997",
      mobile: "9964332060",
      AddressLine1: "#301,manjunathanilayam",
      AddressLine2: "Kasvanahlli,Banglore",
      state: "Karnataka",
      country: "India",
      isEdited: false
    };
    this.onProfileDataChange = this.onProfileDataChange.bind(this);
    this.update = this.update.bind(this);
  }

  onProfileDataChange = e => {
    this.setState({ [e.target.name]: e.target.value, isEdited: true });
  };
  update = () => {
    this.setState({ isEdited: false, state: this.state.state });
  };
  render() {
    return (
      <div>
        <div className="Profile-header">
          <div className="avatar">
            <img
              src={Avatar}
              alt="..."
              className="img-thumbnail rounded-circle"
            />
          </div>
          <div className="Detail-card card">
            <div className="card-body">
              <p className="card-title">Designation</p>
              <p className="Designation"> Software Trainee </p>
            </div>
          </div>
        </div>

        <div>
          <form>
            <div className="details-group">
              <div className="input-group mb-3 data-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    {" "}
                    Firstname{" "}
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={this.state.Firstname}
                  name="Firstname"
                  id="firstname"
                />
              </div>
              <div className="input-group mb-3 data-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    {" "}
                    Lastname{" "}
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={this.state.Lastname}
                  name="Lastname"
                  id="Lastname"
                />
              </div>
              <div className="input-group mb-3 data-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    {" "}
                    Email{" "}
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onProfileDataChange}
                  value={this.state.Email}
                  name="Email"
                  id="Email"
                />
              </div>
              <div className="input-group mb-3 data-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    {" "}
                    Gender{" "}
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={this.state.Gender}
                  name="Gender"
                  id="Gender"
                />
              </div>
              <div className="input-group mb-3 data-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    {" "}
                    Date-of-Birth{" "}
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={this.state.DateOfBirth}
                  name="DateOfBirth"
                  id="DateOfBirth"
                />
              </div>
              <div className="input-group mb-3 data-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    {" "}
                    Mobile{" "}
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onProfileDataChange}
                  value={this.state.mobile}
                  name="mobile"
                  id="mobile"
                />
              </div>
              <div className="Address-group">
                <h4>Present Address</h4>
                <div className="input-group mb-3 data-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      {" "}
                      AddressLine1{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onProfileDataChange}
                    value={this.state.AddressLine1}
                    name="AddressLine1"
                    id="AddressLine1"
                  />
                </div>
                <div className="input-group mb-3 data-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      {" "}
                      AddressLine2{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onProfileDataChange}
                    value={this.state.AddressLine2}
                    name="AddressLine2"
                    id="AddressLine2"
                  />
                </div>
                <div className="input-group mb-3 data-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      {" "}
                      state{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onProfileDataChange}
                    value={this.state.state}
                    name="state"
                    id="state"
                  />
                </div>
                <div className="input-group mb-3 data-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      {" "}
                      country{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onProfileDataChange}
                    value={this.state.country}
                    name="country"
                    id="country"
                  />
                </div>
              </div>
              <div className="Address-group">
                <h4>Permanent Address</h4>
                <div className="input-group mb-3 data-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      {" "}
                      AddressLine1{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={this.state.AddressLine1}
                    name="AddressLine1"
                    id="AddressLine1"
                  />
                </div>
                <div className="input-group mb-3 data-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      {" "}
                      AddressLine2{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={this.state.AddressLine2}
                    name="AddressLine2"
                    id="AddressLine2"
                  />
                </div>
                <div className="input-group mb-3 data-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      {" "}
                      state{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={this.state.state}
                    name="state"
                    id="state"
                  />
                </div>
                <div className="input-group mb-3 data-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      {" "}
                      country{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={this.state.country}
                    name="country"
                    id="country"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row-reverse">
              <button
                type="button"
                className=" btn btn-primary"
                onClick={this.update}
                disabled={!this.state.isEdited}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
