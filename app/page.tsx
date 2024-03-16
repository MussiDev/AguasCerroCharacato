import React from "react";
import CardWithImage from "./src/components/CardWithImage";
import Gallery from "./src/components/Gallery";
import CarouselComponent from "./src/components/Carousel";

const Home = () => {
	return (
		<div>
			<CarouselComponent />
			<CardWithImage
				titleCard='Nuestra agua y sus bondades'
				imageCard='/images/botella.png'
				title='Nuestra Agua'
				subtitleCard='Desde las profundidades del Cerro Characato emerge una vertiente de agua pura, natural, cristalina y rica en minerales. Esta agua recorre el corazón del macizo de los gigantes, filtrándose de forma natural. Luego, tras nuestro proceso final de filtrado, es envasada con los más altos estándares de calidad. De esta manera, aseguramos su pureza hasta el momento de su consumo.'
			/>
			*
			<CardWithImage
				titleCard=''
				imageCard='/images/fondo.jpg'
				title='Nuestra Geografía'
				subtitleCard=' Sierras Grandes, es el nombre de un cordón montañoso paralelo a la Cordillera de los Andes. En este se encuentra la reserva hídrica más importante de la provi córdoba y sus picos más altos. Nuestro Cerro Characato se encuentra ubicado en el norte de esta formación, a 30 kilómetros de La Falda. En el encuentro de dos s geográficos, la pampa de altura de los gigantes y el chaco serrano seco que se extiend los gigantes hasta Bolivia y Paraguay. Es una tierra que aprovecha las bondades de sistemas convirtiéndolo en un lugar único. Ubicado entre valles, al oeste el V Traslasierra, al sur el Valle de Calamuchita y al noreste el Valle de Punilla, desde lleguemos, previamente, debimos recorrer alguna de estas 3 extensiones de tierra que todo el color a esta hermosa provincia.'
				ImageLeft={true}
			/>
			{/*<Gallery />*/}
		</div>
	);
};

export default Home;
