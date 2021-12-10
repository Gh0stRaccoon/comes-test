import { useLocation, useParams } from 'react-router';
import ProductCard from '../components/productCard';

const ProductDetails = () => {
	const { state } = useLocation();
	const { slug } = useParams();
	console.log(state);
	let product = state.find((e) => e.slug === slug);
	return (
		<div>
			<div className="container">
				<img src={product.images[0].src} alt="" />
				<div>
					<div>
						<h1>{product.name}</h1>
						<p>Marca: </p>
					</div>
					<hr />
					<div>
						<p>
							{new Intl.NumberFormat('es-CL', {
								currency: 'CLP',
								style: 'currency',
							}).format(Number(product.price))}
						</p>
						<p>
							Estado:{' '}
							<span>{product.stock_quantity} disponibles</span>
						</p>
						<p
							dangerouslySetInnerHTML={{
								__html: product.short_description,
							}}
						></p>
					</div>
					<hr />
					<div>
						<div>
							<p>Cantidad</p>
							<div>+ 1 -</div>
						</div>
						<button>Añadir al carrito</button>
						<button>Comprar ahora</button>
						<img src="/img/heart-regular.svg" alt="" width="24px" />
					</div>
					<hr />
					<div>
						<p>sku: {product.sku}</p>
						<p>
							Categorías:{' '}
							{product.categories.map((e, i) =>
								product.categories.length === i + 1
									? e.name + '.'
									: e.name + ', '
							)}
						</p>
					</div>
				</div>
			</div>
			<div className="container">
				<div>
					<h2>Descripción</h2>
					<div dangerouslySetInnerHTML={{__html: product.description}}
					></div>
				</div>
			</div>
			<div className="container">
				<div>
                    <h2>Relacionados</h2>
                    
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
