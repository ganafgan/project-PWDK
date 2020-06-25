import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const TokoBukuNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" style={{padding:10}}>
        <NavbarBrand href="/" style={{marginLeft:30}}>
            <a className='navbar-brand' href="/">
                <img src={require('./../assets/Logo/BookStoreLogo.png')} width='30' height='30' className='d-inline-block align-top' alt=""/>
                TokoBuku
            </a>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/transaction'>Transaction</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Product
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/post">
                  Post Product
                </DropdownItem>
                <DropdownItem href="/product">
                  Product List
                </DropdownItem>
                <DropdownItem />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{cursor:'pointer', marginRight:30}} onClick={()=>alert('tes')}>Logout</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TokoBukuNavbar;