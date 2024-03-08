import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

const CarouselComponent = () => {
	return (
		<div className='h-56 sm:h-64 xl:h-80 2xl:h-screen relative'>
			<Carousel
				theme={{
					root: {
						leftControl: "hidden",
						rightControl: "hidden",
					},
					scrollContainer: {
						base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth snap-x indiana-scroll-container indiana-scroll-container--hide-scrollbars",
					},
					indicators: { base: "" },
				}}
				slide={false}
			>
				<Image
					src='https://tangol.com/blog/Fotos/Notas/reserva-natural-villavicencio_337_202102181152000.JPG'
					alt=''
					quality={75}
					width={800}
					height={100}
				/>
			</Carousel>
			<div className='bg-black/50 h-full w-full absolute top-0'></div>
			<div className='flex flex-col gap-2 2xl:gap-8 absolute top-0 mt-[5%] 2xl:mt-[10%] items-center h-full w-full'>
				<div className='w-20'>
					<Image
						src='https://png.pngtree.com/png-clipart/20230927/ourmid/pngtree-simple-mountain-logo-png-image_10168491.png'
						alt=''
						quality={75}
						width={200}
						height={100}
					/>
				</div>
				<h1 className='text-2xl md:text-5xl 2xl:text-7xl font-bold tracking-tight text-white'>
					Cerro Characato SA
				</h1>
				<p className='text-lg md:text-xl 2xl:text-2xl tracking-tight text-white'>
					Agua Mineral de calidad
				</p>
			</div>
		</div>
	);
};

export default CarouselComponent;
