import { Footer } from "flowbite-react";
import React from "react";

const FooterItem = () => {
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
				<Footer.Link href='#' className='text-white'>
					About
				</Footer.Link>
				<Footer.Link href='#' className='text-white'>
					Privacy Policy
				</Footer.Link>
				<Footer.Link href='#' className='text-white'>
					Licensing
				</Footer.Link>
				<Footer.Link href='#' className='text-white'>
					Contact
				</Footer.Link>
			</Footer.LinkGroup>
		</Footer>
	);
};

export default FooterItem;
