"use client";

import React from "react";
import "../styles/globals.css";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<head>
				<title>Agus Cerro Chacarato - Agua Mineral</title>
				<meta charSet='utf-8' />
				<meta content='width=device-width, initial-scale=1.0' name='viewport' />
				<meta content='en' httpEquiv='Content-Language' />
				<meta name='description' content='Agus Cerro Chacarato' />
				<meta name='robots' content='index, follow' />
				<meta name='author' content='Agus Cerro Chacarato' />
				<meta name='copyright' content='Agus Cerro Chacarato' />
				<meta
					name='keywords'
					content='Aguas, Agus Cerro Chacarato, Agua Mineral'
				/>
				<link rel='manifest' href='/manifest.json' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/favicon.ico' />
			</head>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
