import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

const Header = () => (
	<Navbar style={{backgroundColor: '#2139bb'}}>
		<NavbarBrand href='/' style={{color: '#fff', margin: 'auto'}}>
			TCTO Administration
		</NavbarBrand>
	</Navbar>
);

export default Header;