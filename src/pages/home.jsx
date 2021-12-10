import { useEffect, useState } from 'react';
import ProductCard from '../components/productCard';

const Home = () => {
	const [data, setData] = useState([]);
	const [sort, setSort] = useState({ isUpSorted: false });

	useEffect(() => {
		const getData = async () => {
			const products = await fetch('./products.json');
			const jsonProducts = await products.json();
			setData(jsonProducts);
		};
		getData();
	}, []);

	const toggleSort = () => {
		setData(
			data.sort((a, b) => {
				return sort.isUpSorted ? a.price - b.price : b.price - a.price;
			})
		);
		setSort({ isUpSorted: !sort.isUpSorted });
	};
	return (
		<main className="container">
			<aside className="filters">
				<h1 className="sectionTitle">Filtros</h1>
			</aside>
			<section className="results">
				<div className="results__header">
					<h1 className="sectionTitle">Resultados</h1>
					<div className="action_icons">
						{sort.isUpSorted ? (
							<img
								src="./img/sort-numeric-down-solid.svg"
								alt=""
								width="24px"
								onClick={toggleSort}
							/>
						) : (
							<img
								src="./img/sort-numeric-up-alt-solid.svg"
								alt=""
								width="24px"
								onClick={toggleSort}
							/>
						)}
					</div>
				</div>
				<div className="products">
					{data.map((product) => (
						<ProductCard key={product.id} productInfo={product} products={data}/>
					))}
				</div>
			</section>
		</main>
	);
};

export default Home;
