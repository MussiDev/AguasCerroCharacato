import { Banner, Button, Card } from "flowbite-react";
import Image from "next/image";
import React from "react";

const BannerItem = () => {
	return (
		<div className='flex flex-col justify-center items-center md:flex-row md:gap-48'>
			<Card href='#' className='max-w-md hover:bg-transparent bg-transparent '>
				<h5 className='text-4xl font-bold tracking-tight text-white'>
					Noteworthy technology acquisitions 2021
				</h5>
				<p className='font-normal text-white'>
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order. Here are the biggest enterprise
					technology acquisitions of 2021 so far, in reverse chronological
					order.
				</p>
			</Card>

			<img
				src='https://static.wixstatic.com/media/0ca6e2_7355c60ed1214e048ddbf99d7484ac5e~mv2.png/v1/crop/x_0,y_25,w_540,h_1094/fill/w_256,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0ca6e2_7355c60ed1214e048ddbf99d7484ac5e~mv2.png'
				alt=''
				className='h-80'
			/>
		</div>
	);
};

export default BannerItem;
