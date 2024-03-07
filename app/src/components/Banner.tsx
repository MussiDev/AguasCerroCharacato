import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { FaRegCircle } from "react-icons/fa";
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
		<div className='flex flex-col justify-center items-center md:flex-row  h-screen gap-4 md:gap-32 lg:gap-48'>
			<Card href='#' className='max-w-md hover:bg-transparent bg-transparent '>
				<h5 className='text-4xl font-bold tracking-tight text-white'>
					{title}
				</h5>
				<p className='font-normal text-white'>{subtitle}</p>
			</Card>
			<div className='relative h-80 w-44'>
				<Image layout='fill' alt='' src={image} />
			</div>
		</div>
	);
};

export default BannerItem;
