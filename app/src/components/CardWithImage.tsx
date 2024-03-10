import Image from "next/image";
import React from "react";
import CardWithButton from "./CardWithButton";

interface CardWithImageProps {
	title: string;
	imageCard: string;
	titleCard: string;
	subtitleCard: string;
}

const CardWithImage = ({
	title,
	imageCard,
	titleCard,
	subtitleCard,
}: CardWithImageProps) => {
	return (
		<section className='flex flex-col py-20 md:py-40 gap-4'>
			<h5 className='text-xl md:text-5xl font-bold tracking-tight text-white text-center'>
				{title}
			</h5>
			<div className='flex flex-col justify-evenly items-center md:flex-row gap-4 flex-wrap md:mt-16'>
				<CardWithButton
					title={titleCard}
					subtitle={subtitleCard}
					textButton='Conocé más'
				/>

				<div className='relative h-[22rem] w-44'>
					<Image
						layout='fill'
						alt={`Image card ${title}`}
						src={imageCard}
						className='origin-center rotate-12'
					/>
				</div>
			</div>
		</section>
	);
};

export default CardWithImage;
