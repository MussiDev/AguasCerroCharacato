import { Montserrat } from "next/font/google";
import React from "react";
import "../styles/globals.css";
import NavbarList from "./src/components/Navbar";
import FooterItem from "./src/components/Footer";
import SocialMedia from "./src/components/SocialMedia";
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});
export const metadata = {
	title: "Aguas Cerro Chacarato - Agua Mineral",
	description: "Página de Aguas Cerro Characato S.A",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='es' className={montserrat.className}>
			<head>
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
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/favicon.ico' />
			</head>
			<body className=' flex flex-col justify-between h-screen'>
				<NavbarList />
				<main className='bg-gradient-to-r from-slate-950 to-slate-900'>
					{children}
				</main>
				<SocialMedia />
				<FooterItem />
			</body>
		</html>
	);
};

export default RootLayout;
