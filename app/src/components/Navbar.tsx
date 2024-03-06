import React from "react";
import { Navbar } from "flowbite-react";
const NavbarList = () => {
	return (
		<Navbar fluid={true} rounded={true}>
			<Navbar.Brand>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Cerro Chacarato
				</span>
			</Navbar.Brand>
			<Navbar.Toggle className='text-black' theme={{ base: "p-2" }} />
			<Navbar.Collapse>
				<Navbar.Link href='' active={true}>
					Home
				</Navbar.Link>
				<Navbar.Link href=''>About</Navbar.Link>
				<Navbar.Link href=''>Services</Navbar.Link>
				<Navbar.Link href=''>Pricing</Navbar.Link>
				<Navbar.Link href=''>Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarList;
