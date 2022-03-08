import React, { Component } from 'react';
import Stafflist from './components/StafflistComponent';
import './App.css';
import { DEPARTMENTS, ROLE, STAFFS } from './shared/staffs';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';


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
        <Header />
        <Stafflist staffs={this.state.staffs} />
        <Footer />
      </div>
    );
  }
}

export default App;
