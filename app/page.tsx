import React from "react";
import CardWithImage from "./src/components/CardWithImage";
import Gallery from "./src/components/Gallery";
import CarouselComponent from "./src/components/Carousel";

const Home = () => {
	return (
		<div>
			<CarouselComponent />
			<CardWithImage
				titleCard='Noteworthy technology acquisitions 2021'
				imageCard='https://static.wixstatic.com/media/0ca6e2_7355c60ed1214e048ddbf99d7484ac5e~mv2.png/v1/crop/x_0,y_25,w_540,h_1094/fill/w_256,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0ca6e2_7355c60ed1214e048ddbf99d7484ac5e~mv2.png'
				title='Nuestra Agua'
				subtitleCard='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
			/>
			<CardWithImage
				titleCard='Noteworthy technology acquisitions 2021'
				imageCard='https://fotos.perfil.com/2023/05/29/cerro-characato-sa-1577018.jpg'
				title='Nuestra Planta'
				subtitleCard='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
				ImageLeft={true}
			/>
			<Gallery />
		</div>
	);
};

export default Home;
