import React from "react";
import BannerItem from "./src/components/Banner";
import PlantSection from "./src/components/PlantSection";

const Home = () => {
	return (
		<main>
			<BannerItem
				image={
					"https://static.wixstatic.com/media/0ca6e2_7355c60ed1214e048ddbf99d7484ac5e~mv2.png/v1/crop/x_0,y_25,w_540,h_1094/fill/w_256,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0ca6e2_7355c60ed1214e048ddbf99d7484ac5e~mv2.png"
				}
				title={"Noteworthy technology acquisitions 2021"}
				subtitle={
					"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
				}
			/>
			<PlantSection />
		</main>
	);
};

export default Home;
