import { Button, Card } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
const CardWithImage = ({
	image,
	title,
	subtitle,
}: {
	image: string;
	title: string;
	subtitle: string;
}) => {
	return (
		<section className='flex flex-col py-40 gap-4'>
			<h5 className='text-xl md:text-5xl font-bold tracking-tight text-white text-center'>
				Nuestra Agua
			</h5>
			<div className='flex flex-col justify-evenly items-center md:flex-row gap-4 flex-wrap mt-16'>
				<Card
					href='#'
					className='md:max-w-3xl max-w-full hover:bg-transparent bg-transparent '
				>
					<h5 className='text-left text-xl md:text-5xl font-bold tracking-tight text-white'>
						{title}
					</h5>
					<p className='font-normal text-white text-lg md:text-xl'>
						{subtitle}
					</p>
					<Button>
						Conocé más
						<FaArrowDown className='ms-2' />
					</Button>
				</Card>
				<div className='relative h-[22rem] w-44'>
					<Image
						layout='fill'
						alt=''
						src={image}
						className='origin-center rotate-12'
					/>
				</div>
			</div>
		</section>
	);
};

export default CardWithImage;
