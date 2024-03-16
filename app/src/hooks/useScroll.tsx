"use client";
import { useEffect, useState } from "react";

const useScroll = () => {
	const [showButton, setShowButton] = useState(false);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	useEffect(() => {
		const handleScrollButtonVisibily = () => {
			window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
		};
		window.addEventListener("scroll", handleScrollButtonVisibily);
		return () => {
			window.removeEventListener("scroll", handleScrollButtonVisibily);
		};
	}, []);

	return { showButton, handleScrollToTop };
};

export default useScroll;
