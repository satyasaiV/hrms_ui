import React, { Component } from 'react';
import './Employee.css'
import axios from 'axios';
import * as Constants from '../../Constant';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const URL = Constants.URL;

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee:[],
    }
  }

  componentDidMount() {
    axios.get(URL + `/employeeslist/`)
    .then(res => { this.setState({ employee : res.data}) })
    .catch(err => {
      console.log(err.message, 'data not send');
    });
  }

  render() {
    return (
      <div>
        <div className="card employeeListContainer">
        <div className="card-header employeeListHeader">
          <h5>Employee List</h5>
        </div>
        <div className="table-responsive">
          <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Employee ID</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {this.state.employee.map((employee, index) => 
                <tr key={employee.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{employee.first_name}</td>
                  <td>{employee.employee_id}</td>
                  <td className="iconFill">
                    <FontAwesomeIcon icon={faEdit} className="icon-color" />
                    <FontAwesomeIcon icon={faTrash} className="icon-color ml-3" />
                  </td>
                </tr>
                )}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    );
  }
}

export default Employee;