import { Footer } from "flowbite-react";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterItem = () => {
	return (
		<Footer
			container
			className='bg-gradient-to-r from-slate-950 to-slate-900 flex flex-row justify-between border-t border-blue-500 rounded-none w-full'
		>
			<div className='w-full'>
				<div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-12'>
					<div className='flex flex-row gap-4 items-center'>
						<Footer.Brand
							href='https://png.pngtree.com/png-clipart/20230927/ourmid/pngtree-simple-mountain-logo-png-image_10168491.png'
							src='https://png.pngtree.com/png-clipart/20230927/ourmid/pngtree-simple-mountain-logo-png-image_10168491.png'
							alt='Aguas Cerro Characato Logo'
							theme={{ img: "w-12 h-12" }}
						/>
						<Footer.Copyright
							href='#'
							by='Aguas Cerro Characato SA'
							year={new Date().getFullYear()}
							className='text-white text-lg'
						/>
					</div>
					<div className='flex flex-row gap-4 items-center'>
						<Footer.Icon href='#' icon={FaInstagram} />
						<Footer.Icon href='#' icon={FaWhatsapp} />
					</div>
					<div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
						<div>
							<Footer.Title title='about' />
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Flowbite</Footer.Link>
								<Footer.Link href='#'>Tailwind CSS</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title='Follow us' />
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Github</Footer.Link>
								<Footer.Link href='#'>Discord</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title='Legal' />
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Privacy Policy</Footer.Link>
								<Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
			</div>
		</Footer>
	);
};

export default FooterItem;
