import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state={
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
            <Navbar dark expand="md">
               <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                 <NavbarBrand className="mr-auto" href="/">
                   <img src="assets/images/logo.png" height="30" width="41"
                    alt="Ristorante Con Fusion"/>
                 </NavbarBrand>
                 <Collapse isOpen={this.state.isNavOpen} navbar>
                 <Nav navbar>
                     <NavItem>
                         <NavLink className="nav-link" to="/staffs">
                         <i class="fa fa-user" aria-hidden="true"></i>
                           Nhân viên
                         </NavLink>
                     </NavItem>
                     <NavItem>
                         <NavLink className="nav-link" to="/phongban">
                         <i class="fa fa-address-card-o" aria-hidden="true"></i>
                            Phòng ban
                         </NavLink>
                     </NavItem>
                     <NavItem>
                       
                         <NavLink className="nav-link" to="/bangluong">
                         <i class="fa fa-money" aria-hidden="true"></i>
                            Bảng lương
                         </NavLink>
                     </NavItem>
                 </Nav>
                 </Collapse>

               </div>
             </Navbar>
           
            
           </React.Fragment>
        );
   
    }
}

export default Header;