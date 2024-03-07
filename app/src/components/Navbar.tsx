import React, { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import useWindowDimensions from "../hooks/useDimensions";
const NavbarList = () => {
	const { width } = useWindowDimensions();
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		width && width < 768 ? setIsMobile(true) : setIsMobile(false);
	}, [width]);
	return (
		<Navbar
			theme={{
				root: { base: "bg-transparent p-2 text-black" },
			}}
			rounded={true}
		>
			<Navbar.Brand>
				<span className='text-white self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					LOGO
				</span>
			</Navbar.Brand>
			{isMobile && (
				<Navbar.Toggle className='text-white' theme={{ base: "p-2" }} />
			)}
			<Navbar.Collapse>
				<Navbar.Link
					href=''
					active={true}
					className='text-white hover:bg-transparent hover:text-orange-700'
				>
					Home
				</Navbar.Link>
				<Navbar.Link
					href=''
					className='text-white hover:bg-transparent hover:text-orange-700'
				>
					About
				</Navbar.Link>
				<Navbar.Link
					href=''
					className='text-white hover:bg-transparent hover:text-orange-700'
				>
					Services
				</Navbar.Link>
				<Navbar.Link
					href=''
					className='text-white hover:bg-transparent hover:text-orange-700'
				>
					Pricing
				</Navbar.Link>
				<Navbar.Link
					href=''
					className='text-white hover:bg-transparent hover:text-orange-700'
				>
					Contact
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarList;
