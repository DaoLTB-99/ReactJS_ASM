import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import './components.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar dark expand="md">
                <div className='container font-weight-bold'>
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href='/'>
                        <img src="assets/images/logo.png" height="30" width="41" alt="Company's Logo" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/stafflist'><span className="fa fa-list fa-lg"></span> Nhan Vien</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/departments'><span className="fa fa-info fa-lg"></span> Phong Ban</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/salary'><span className="fa fa-address-card fa-lg"></span> Bang Luong</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;