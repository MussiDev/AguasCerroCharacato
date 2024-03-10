import { Footer } from "flowbite-react";
import React from "react";

const FooterItem = () => {
	const linksFooterr = ["About", "Privacy Policy", "Licensing", "Contact"];
	return (
		<Footer
			container
			className='bg-gradient-to-r from-slate-950 to-slate-900 flex flex-row justify-between border-t border-blue-500 rounded-none w-full'
		>
			<Footer.Copyright
				href='#'
				by='Aguas Cerro Characato'
				year={new Date().getFullYear()}
				className='text-white'
			/>
			<Footer.LinkGroup>
				{linksFooterr.map((link: string, index: number) => (
					<Footer.Link href='#' key={index} className='text-white'>
						{link}
					</Footer.Link>
				))}
			</Footer.LinkGroup>
		</Footer>
	);
};

export default FooterItem;
