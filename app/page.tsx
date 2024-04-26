import React from "react";
import CardWithImage from "./src/components/CardWithImage";
import Gallery from "./src/components/Gallery";
import CarouselComponent from "./src/components/Carousel";

const Home = () => {
	const cards = [
		{
			titleCard: "Nuestra Agua",
			imageCard: "/images/botella.png",
			title: "Nuestra Agua",
			bottle: true,
			id: "Agua",
			subtitleCard:
				"Desde las profundidades del Cerro Characato emerge una vertiente de agua pura, natural, cristalina y rica en minerales. Esta agua recorre el corazón del macizo de los gigantes, filtrándose de forma natural. Luego, tras nuestro proceso final de filtrado, es envasada con los más altos estándares de calidad. De esta manera, aseguramos su pureza hasta el momento de su consumo.",
		},
		{
			titleCard: "Geografía",
			imageCard: "/images/fondo.jpg",
			title: "Nuestra Geografía",
			subtitleCard:
				"Sierras Grandes, es el nombre de un cordón montañoso paralelo a la Cordillera de los Andes. En este se encuentra la reserva hídrica más importante de la provincia de córdoba y sus picos más altos. Nuestro Cerro Characato se encuentra ubicado en el norte de esta formación, a 30 kilómetros de La Falda. En el encuentro de dos sistemas geográficos, la pampa de altura de los gigantes y el chaco serrano seco que se extiende desde los gigantes hasta Bolivia y Paraguay. Es una tierra que aprovecha las bondades de sistemas convirtiéndolo en un lugar único. Ubicado entre valles, al oeste el Valle de Traslasierra, al sur el Valle de Calamuchita y al noreste el Valle de Punilla, desde donde lleguemos, previamente, debimos recorrer alguna de estas 3 extensiones de tierra que todo el color a esta hermosa provincia.",
			id: "Geografia",
			ImageLeft: true,
		},
		{
			titleCard: "Cerro Characato SA",
			imageCard: "/images/logo.png",
			logo: true,
			title: "Nuestra Historia",
			id: "Historia",
			subtitleCard:
				"Se fundó en agosto de 1990, era una época de cambios en el país y esto no dejo de ser uno de ellos, el mundo del agua era algo nuevo, de otro rubro, pero cuando le ofrecieron a Eduardo la posibilidad de comprar unas tierras en una zona adentrada en la sierra Cordobesas, en las cuales se ubicaba la vertiente de agua más pura de la zona, no lo dudo ni un segundo y dijo que sí. La producción de agua de a poco empezó y sufrió muchos altibajos, pero siempre salió adelante, porque cada día se le puso lo más importante, lo que se requiere para tener éxito, mucho amor y pasión. Hace algunos años, Eduardo ya no podía dedicarle el tiempo necesario que requería estar al frente de una empresa del rubro. Por lo que decidió transferir la empresa a sus nuevos propietarios, siempre dentro de la familia siguiendo con ese legado pero con nuevas ideas y con la inyección de capital, se empezó a proyectar llevar Cerro Characato SA a un nivel de venta nacional y llegado su tiempo, por la calidad del producto, poder exportarlo. Hoy con más de 33 años de experiencia y luego de haber pasado muchas crisis económicas podemos decirles que somos una empresa con bases firmes, que les proveerá de agua mineral pura de manantial para cada una de sus necesidades. ",
		},
		{
			titleCard: "Medio Ambiente",
			imageCard: "/images/catarata.jpg",
			title: "Compromiso con el Medio Ambiente",
			id: "Ambiente",
			subtitleCard:
				'Nuestras botellas se hacen a base de plástico PET reciclado, tenemos el compromiso con el medio ambiente de que si utilizamos un recurso tan rico que este nos brinda, poder cuidarlo de manera responsable y segura. Para el envasado utilizamos envases que son aptos para reciclar en su totalidad, tanto la botella como la tapa o su etiqueta, de esta forma nuestros productos parten de material reciclado y pueden volver a ser botella para un nuevo producto en poco tiempo, formando un circulo de responsabilidad en el cuidado del medio ambiente. "Un esfuerzo hoy, es un alivio mañana".',
			ImageLeft: true,
		},
	];
	return (
		<div>
			<CarouselComponent />
			{cards.map((card: any, key: number) => {
				return <CardWithImage key={key} {...card} />;
			})}
			<Gallery />
		</div>
	);
};

export default Home;
