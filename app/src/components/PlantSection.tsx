import React from "react";
import BannerItem from "./Banner";
import Image from "next/image";
const PlantSection = () => {
	return (
		<section className='flex flex-col gap-4 items-center'>
			<h5 className='text-4xl font-bold tracking-tight text-white'>Imágenes</h5>
			<div className='justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full mx-auto container'>
				<div className='h-64 w-96 relative'>
					<Image
						src='https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg'
						alt=''
						layout='fill'
						className='rounded-lg'
					/>
				</div>
				<div className='h-64 w-96 relative'>
					<Image
						src='https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg'
						alt=''
						layout='fill'
						className='rounded-lg'
					/>
				</div>
				<div className='h-64 w-96 relative'>
					<Image
						src='https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg'
						alt=''
						layout='fill'
						className='rounded-lg'
					/>
				</div>
				<div className='h-64 w-96 relative'>
					<Image
						src='https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg'
						alt=''
						layout='fill'
						className='rounded-lg'
					/>
				</div>
				<div className='h-64 w-96 relative'>
					<Image
						src='https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg'
						alt=''
						layout='fill'
						className='rounded-lg'
					/>
				</div>
				<div className='h-64 w-96 relative'>
					<Image
						src='https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg'
						alt=''
						layout='fill'
						className='rounded-lg'
					/>
				</div>
			</div>{" "}
		</section>
	);
};
export default PlantSection;
