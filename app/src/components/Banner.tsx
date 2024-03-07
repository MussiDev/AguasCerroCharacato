import { Card } from "flowbite-react";
import React from "react";

const BannerItem = ({
	image,
	title,
	subtitle,
}: {
	image: string;
	title: string;
	subtitle: string;
}) => {
	return (
		<div className='flex flex-col justify-center items-center md:flex-row md:gap-48 h-screen'>
			<Card href='#' className='max-w-md hover:bg-transparent bg-transparent '>
				<h5 className='text-4xl font-bold tracking-tight text-white'>
					{title}
				</h5>
				<p className='font-normal text-white'>{subtitle}</p>
			</Card>

			<img src={image} alt='' className='h-80' />
		</div>
	);
};

export default BannerItem;
