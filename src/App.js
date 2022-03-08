import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Stafflist from './components/StafflistComponent';
import './App.css';
import { DEPARTMENTS, ROLE, STAFFS } from './shared/staffs';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

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

    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/stafflist' component={() => <Stafflist staffs={this.state.staffs} />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
