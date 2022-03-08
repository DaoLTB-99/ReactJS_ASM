import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import './components.css';


class Header extends Component {


    render() {
        return (
            <Navbar dark>
                <div className='container font-weight-bold'>
                    <NavbarBrand href='/'>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
                </div>
            </Navbar>
        );
    }
}

export default Header;