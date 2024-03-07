import React from "react";
import { Navbar } from "flowbite-react";
const NavbarList = () => {
	return (
		<Navbar theme={{ root: { base: "bg-transparent p-2 text-black" } }}>
			<Navbar.Brand>
				<span className='text-white self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					LOGO
				</span>
			</Navbar.Brand>
			{/*<Navbar.Toggle className='' theme={{ base: "p-2" }} />*/}
			<Navbar.Collapse>
				<Navbar.Link href='' active={true} className='text-white'>
					Home
				</Navbar.Link>
				<Navbar.Link href='' className='text-white'>
					About
				</Navbar.Link>
				<Navbar.Link href='' className='text-white'>
					Services
				</Navbar.Link>
				<Navbar.Link href='' className='text-white'>
					Pricing
				</Navbar.Link>
				<Navbar.Link href='' className='text-white'>
					Contact
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarList;
