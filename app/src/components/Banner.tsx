import { Banner, Button } from "flowbite-react";
import Image from "next/image";
import React from "react";

const BannerItem = () => {
	return (
		<Banner className='h-80 relative w-full grid grid-flow-row grid-cols-2 place-content-around place-items-center px-48'>
			<div className='flex flex-col w-full items-start gap-4'>
				<h1 className='text-white font-bold text-7xl'>Cerro Characato</h1>
				<p className='text-white w-[80%]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sed
					quasi iure in! Accusantium porro, illum odio ab, in possimus vero
					quidem, quod neque rem molestias impedit officia expedita dolore!
				</p>
				<Button>Conocenos!</Button>
			</div>
			<div className='h-80'>
				<img
					src='https://static.wixstatic.com/media/0ca6e2_7355c60ed1214e048ddbf99d7484ac5e~mv2.png/v1/crop/x_0,y_25,w_540,h_1094/fill/w_256,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0ca6e2_7355c60ed1214e048ddbf99d7484ac5e~mv2.png'
					alt=''
					className='h-80'
				/>
			</div>
		</Banner>
	);
};

export default BannerItem;
