"use client";
import Link from "next/link";
import useScroll from "../hooks/useScroll";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
	const { showButton } = useScroll();

	return (
		showButton && (
			<div className='flex flex-col gap-6 bottom-20 right-6 fixed'>
				<Link href={"https://wa.me/3416842593"} target='_blank'>
					<p className='bg-[#25D366] text-white p-2 rounded-full cursor-pointer'>
						<FaWhatsapp size={20} />
					</p>
				</Link>
				<Link
					href='https://www.instagram.com/aguacerrocharacato?igsh=YzAwZ214aGJIOXMz'
					target='_blank'
				>
					<p className='text-white bg-gradient-to-br from-[#833AB4] to-[#E1306C] p-2 rounded-full cursor-pointer'>
						<FaInstagram size={20} />
					</p>
				</Link>
			</div>
		)
	);
};

export default SocialMedia;
