import React from "react";
import Image from "next/image";
const Gallery = () => {
	const images = [
		"https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg",
		"https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg",
		"https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg",
		"https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg",
		"https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg",
		"https://i.blogs.es/b71f8a/1366_2000-54-/1366_2000.jpeg",
	];
	return (
		<section className='flex flex-col gap-4 items-center'>
			<h5 className='text-3xl md:text-4xl font-bold tracking-tight text-white my-2'>
				Imágenes
			</h5>
			<div className='justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-48 md:w-full mx-auto container'>
				{images.map((image: string, key: number) => {
					return (
						<div className='h-48 w-72 relative' key={key}>
							<Image src={image} alt='' layout='fill' className='rounded-lg' />
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default Gallery;
