"use client";

import React from "react";
import "../styles/globals.css";
import NavbarList from "./src/components/Navbar";
import FooterItem from "./src/components/Footer";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='es'>
			<head>
				<title>Aguas Cerro Chacarato - Agua Mineral</title>
				<meta charSet='utf-8' />
				<meta content='width=device-width, initial-scale=1.0' name='viewport' />
				<meta content='es' httpEquiv='Content-Language' />
				<meta name='description' content='Aguas Cerro Chacarato' />
				<meta name='robots' content='index, follow' />
				<meta name='author' content='Aguas Cerro Chacarato' />
				<meta name='copyright' content='Aguas Cerro Chacarato' />
				<meta
					name='keywords'
					content='Aguas, Aguas Cerro Chacarato, Agua Mineral'
				/>
				<link rel='manifest' href='/manifest.json' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/favicon.ico' />
			</head>
			<body className='bg-gradient-to-r from-slate-950 to-slate-900 text-white flex flex-col justify-between h-screen'>
				<NavbarList />
				{children}
				<FooterItem />
			</body>
		</html>
	);
};

export default RootLayout;
