import { Button, Card } from "flowbite-react";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

interface CardWithButtonProps {
	title: string;
	subtitle: string;
	textButton: string;
}

const CardWithButton = ({
	title,
	subtitle,
	textButton,
}: CardWithButtonProps) => {
	return (
		<Card
			href='#'
			className='md:max-w-3xl max-w-72 hover:bg-transparent bg-transparent '
		>
			<h5 className='text-left text-lg md:text-5xl font-bold tracking-tight text-white'>
				{title}
			</h5>
			<p className='font-normal text-white text-md md:text-xl'>{subtitle}</p>
			<Button>
				{textButton}
				<FaArrowDown className='ms-2' />
			</Button>
		</Card>
	);
};

export default CardWithButton;
