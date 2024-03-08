import React, { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import useWindowDimensions from "../hooks/useDimensions";
import Image from "next/image";
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
				root: {
					base: "bg-transparent absolute z-50 flex flex-row justify-between w-full",
				},
			}}
		>
			<Navbar.Brand>
				<div className='relative w-16 md:w-full'>
					<Image
						src='https://png.pngtree.com/png-clipart/20230927/ourmid/pngtree-simple-mountain-logo-png-image_10168491.png'
						alt=''
						quality={75}
						width={100}
						height={100}
					/>
				</div>
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
