"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import useWindowDimensions from "../hooks/useDimensions";
import Image from "next/image";
import useScroll from "../hooks/useScroll";
const NavbarList = () => {
	const { showButton } = useScroll();
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
					base: `${
						showButton ? "bg-slate-900" : "py-4 bg-transparent"
					} absolute z-50 flex flex-row justify-between w-full lg:px-4 fixed`,
				},
			}}
		>
			<Navbar.Brand>
				<div className='relative'>
					{showButton && (
						<Image
							src='/images/logo.png'
							alt=''
							quality={75}
							width={80}
							height={100}
						/>
					)}
				</div>
			</Navbar.Brand>
			{isMobile && (
				<Navbar.Toggle className='text-white' theme={{ base: "p-2" }} />
			)}
			<Navbar.Collapse
				theme={{
					base: "w-full md:block md:w-auto bg-[#0f172a] md:bg-transparent",
				}}
			>
				{Links.map((link: string, key: number) => {
					return (
						<Navbar.Link
							href=''
							active={true}
							key={key}
							className='bg-[#0f172a] text-white hover:bg-transparent hover:text-primary md:text-xl md:text-white md:bg-transparent'
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
