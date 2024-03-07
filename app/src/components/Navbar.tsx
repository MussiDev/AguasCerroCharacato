import React, { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import useWindowDimensions from "../hooks/useDimensions";
const NavbarList = () => {
	const { width } = useWindowDimensions();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		width && width < 768 ? setIsMobile(true) : setIsMobile(false);
	}, [width]);

	const Links = ["Inicio", "Nuestra Fábrica", "Productos", "Contacto"];

	return (
		<Navbar
			theme={{
				root: { base: "bg-transparent p-6" },
			}}
			fluid
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
				{Links.map((link: string, key: number) => {
					return (
						<Navbar.Link
							href=''
							active={true}
							key={key}
							className='text-white hover:bg-transparent hover:text-blue-500 md:text-xl md:text-white'
						>
							{link}
						</Navbar.Link>
					);
				})}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarList;
