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
							src='/images/logo.png'
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
						<Footer.Icon
							href='https://www.instagram.com/aguacerrocharacato?igsh=YzAwZ214aGJIOXMz'
							target='_blank'
							icon={FaInstagram}
						/>
						<Footer.Icon
							href='https://wa.me/3416842593'
							target='_blank'
							icon={FaWhatsapp}
						/>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
						<div>
							<Footer.LinkGroup col>
								<Footer.Link href='#Inicio'>Inicio</Footer.Link>
								<Footer.Link href='#Agua'>Nuestra Agua</Footer.Link>
								<Footer.Link href='#Geografia'>Nuestra Geografía</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.LinkGroup col>
								<Footer.Link href='#Historia'>Nuestra Historia</Footer.Link>
								<Footer.Link href='#Ambiente'>
									Compromiso con el Medio Ambiente
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
			</div>
		</Footer>
	);
};

export default FooterItem;
