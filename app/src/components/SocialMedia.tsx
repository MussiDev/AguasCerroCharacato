import useScroll from "../hooks/useScroll";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
	const { showButton } = useScroll();

	return (
		showButton && (
			<div className='flex flex-col gap-6 bottom-20 right-6 fixed'>
				<p className='bg-[#25D366] text-white p-2 rounded-full cursor-pointer'>
					<FaWhatsapp size={20} />
				</p>
				<p className='text-white bg-gradient-to-br from-[#833AB4] to-[#E1306C] p-2 rounded-full cursor-pointer'>
					<FaInstagram size={20} />
				</p>
			</div>
		)
	);
};

export default SocialMedia;
