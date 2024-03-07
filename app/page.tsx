import React from "react";
import BannerItem from "./src/components/Banner";
import PlantSection from "./src/components/PlantSection";

const Home = () => {
	return (
		<main className='fluid'>
			<BannerItem />
			<PlantSection />
		</main>
	);
};

export default Home;
