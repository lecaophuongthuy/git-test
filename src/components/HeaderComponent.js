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
                         <img src="assets/images/nhanvien.png" height="30" width="41"
                    alt="Ristorante Con Fusion"/>
                           Nhân viên
                         </NavLink>
                     </NavItem>
                     <NavItem>
                         <NavLink className="nav-link" to="/phongban">
                         <img src="assets/images/phongban.png" height="30" width="41"
                    alt="Ristorante Con Fusion"/>
                            Phòng ban
                         </NavLink>
                     </NavItem>
                     <NavItem>
                       
                         <NavLink className="nav-link" to="/bangluong">
                         <img src="assets/images/bangluong.jpg" height="30" width="41"
                    alt="Ristorante Con Fusion"/>
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