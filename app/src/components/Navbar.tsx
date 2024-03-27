"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import useWindowDimensions from "../hooks/useDimensions";
import Image from "next/image";
import useScroll from "../hooks/useScroll";
import Link from "next/link";
const NavbarList = () => {
	const { showButton } = useScroll();
	const { width } = useWindowDimensions();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		width && width < 768 ? setIsMobile(true) : setIsMobile(false);
	}, [width]);

	const Links = [
		{ href: "#Inicio", link: "Inicio" },
		{ href: "#Agua", link: "Nuestra Agua" },
		{ href: "#Geografia", link: "Nuestra Geografía" },
		{ href: "#Historia", link: "Nuestra Historia" },
		{ href: "#Ambiente", link: "Medio Ambiente" },
	];

	return (
		<Navbar
			theme={{
				root: {
					base: `${
						showButton
							? "bg-gradient-to-r from-white to-slate-900 "
							: "py-4 bg-transparent"
					} absolute z-50 flex flex-row justify-between w-full lg:px-4 fixed`,
				},
			}}
		>
			<Navbar.Brand>
				<div className='relative'>
					{showButton && (
						<Image
							src='/images/logo.png'
							alt='logo'
							priority
							quality={100}
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
				{Links.map((nav: any, key: number) => {
					return (
						<Link
							href={nav.href}
							key={key}
							className='focus:text-primary block py-2 pr-4 pl-3 md:p-0 dark:text-white md:text-md  bg-[#0f172a] text-white hover:bg-transparent hover:text-primary md:text-md lg:text-lg md:text-white md:bg-transparent'
						>
							{nav.link}
						</Link>
					);
				})}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarList;
