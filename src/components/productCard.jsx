import { useNavigate } from 'react-router-dom';
function ProductCard(props) {
	const history = useNavigate();

	const { name, short_description, price, images, slug } = props.productInfo;
	return (
		<div
			className="product"
			onClick={() => {
                history(`/producto/${slug}`, {state: props.products});
			}}
		>
			<img className="product__img" src={images[0].src} alt="" />
			<div className="product__helper">
				<h2 className="product__title">{name}</h2>
				<p
					className="product__description"
					dangerouslySetInnerHTML={{ __html: short_description }}
				></p>
				<p className="product__price">
					{new Intl.NumberFormat('es-CL', {
						currency: 'CLP',
						style: 'currency',
					}).format(Number(price))}
				</p>
			</div>
		</div>
	);
}

export default ProductCard;
