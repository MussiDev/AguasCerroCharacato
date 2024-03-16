import Image from "next/image";
import React from "react";
import CardWithButton from "./CardWithButton";

interface CardWithImageProps {
	title: string;
	imageCard: string;
	titleCard: string;
	subtitleCard: string;
	ImageLeft?: boolean;
}

const CardWithImage = ({
	title,
	imageCard,
	titleCard,
	subtitleCard,
	ImageLeft,
}: CardWithImageProps) => {
	return (
		<section className='flex flex-col py-20 md:py-40 gap-4 md:px-12'>
			<h5 className='text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white text-center'>
				{title}
			</h5>
			{ImageLeft ? (
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 place-content-center place-items-center md:mt-16'>
					<div className='relative h-[10rem] w-[16rem] sm:h-[16rem] sm:w-96 lg:w-[30rem] lg:h-[17rem] xl:w-[40rem] xl:h-[20rem]'>
						<Image
							layout='fill'
							alt={`Image card ${title}`}
							src={imageCard}
							className='origin-center rounded-sm'
						/>
					</div>

					<CardWithButton
						title={titleCard}
						subtitle={subtitleCard}
						textButton='Conocé más'
					/>
				</div>
			) : (
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 place-content-center place-items-center md:mt-16'>
					<CardWithButton
						title={titleCard}
						subtitle={subtitleCard}
						textButton='Conocé más'
					/>

					<div className='relative h-[18rem] w-52 md:h-[22rem] md:w-64'>
						<Image
							layout='fill'
							alt={`Image card ${title}`}
							src={imageCard}
							className='origin-center rotate-12'
						/>
					</div>
				</div>
			)}
		</section>
	);
};

export default CardWithImage;
