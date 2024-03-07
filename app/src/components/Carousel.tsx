import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

const CarouselComponent = () => {
	return (
		<div className='h-56 sm:h-64 xl:h-80 2xl:h-[38rem] relative'>
			<Carousel
				theme={{
					root: {
						leftControl: "hidden",
						rightControl: "hidden",
					},
					indicators: { base: "" },
				}}
			>
				<Image
					src='https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg'
					alt=''
					quality={75}
					width={800}
					height={100}
				/>
			</Carousel>
			<div className='bg-black/50 h-full w-full absolute top-0 flex flex-col justify-center items-center gap-2'>
				<h1 className='text-xl md:text-5xl font-bold tracking-tight text-white'>
					Cerro Characato
				</h1>
				<p className='text-3xl tracking-tight text-white'>
					Es un agua mineral natural de manantial única de reserva protegida
				</p>
			</div>
		</div>
	);
};

export default CarouselComponent;
