import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Stafflist from './components/StafflistComponent';
import './App.css';
import { DEPARTMENTS, ROLE, STAFFS } from './shared/staffs';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
      role: ROLE
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className='container font-weight-bold'>
            <NavbarBrand href='/'>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <p>Bấm vào tên nhân viên để xem thông tin</p>
        <Stafflist staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
