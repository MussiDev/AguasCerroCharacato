import { Carousel } from "flowbite-react";
import React from "react";

const CarouselComponent = () => {
	return (
		<div className='h-56 sm:h-64 md:h-72 lg:h-screen relative' id='Inicio'>
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
			<div className='flex flex-col gap-2 2xl:gap-8 absolute top-0 mt-[10%] 2xl:mt-[20%] items-center h-full w-full'>
				<h1 className='text-2xl md:text-5xl 2xl:text-7xl font-normal tracking-tight text-white'>
					Cerro Characato
				</h1>
				<p className='text-lg md:text-xl 2xl:text-2xl tracking-tight text-white'>
					Agua Mineral Natural De Manantial
				</p>
			</div>
		</div>
	);
};

export default CarouselComponent;
