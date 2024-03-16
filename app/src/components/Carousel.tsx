import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

const CarouselComponent = () => {
	return (
		<div className='h-56 sm:h-64 md:h-72 lg:h-screen relative'>
			<Carousel
				theme={{
					root: {
						base: "relative h-full w-full bg-center bg-cover bg-hero",
						leftControl: "hidden",
						rightControl: "hidden",
					},
					scrollContainer: {
						base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth snap-x indiana-scroll-container indiana-scroll-container--hide-scrollbars",
					},
					indicators: { base: "" },
				}}
				slide={false}
			/>
			<div className='bg-black/70 h-full w-full absolute top-0'></div>
			<div className='flex flex-col gap-2 2xl:gap-8 absolute top-0 mt-[5%] 2xl:mt-[10%] items-center h-full w-full'>
				<div className='w-20 md:32 lg:w-44'>
					<Image
						src='/images/logo.png'
						alt='logo'
						quality={75}
						width={200}
						height={100}
					/>
				</div>
				<h1 className='text-2xl md:text-5xl 2xl:text-7xl font-normal tracking-tight text-primary'>
					Cerro Characato
				</h1>
				<p className='text-lg md:text-xl 2xl:text-2xl tracking-tight text-secondary'>
					Agua Mineral Natural De Calidad
				</p>
			</div>
		</div>
	);
};

export default CarouselComponent;
