import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
	const { shoppingCart, onProductCountChange } = useShoppingCart();
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}>

				{
					products.map( product => (
						<ProductCard 
							product={product}
							key={ product.id }
							className="bg-dark text-white"
							onChange={ onProductCountChange }
							value={ shoppingCart[product.id]?.count || 0 }
						>
							<ProductImage   className="custom-image" />
							<ProductTitle   className="text-bold"	 />
							<ProductButtons className="white-buttons"/>
						</ProductCard>
					))
				}
			</div>

			<div className="shopping-cart">
				{
					Object.entries( shoppingCart ).map(([ key, product ]) => (
						<ProductCard 
							key={ key }
							product={product}
							className="bg-dark text-white"
							style={{ width: '100px' }}
							onChange={ onProductCountChange }
							value={ product.count }
						>
							<ProductImage   className="custom-image" />
							<ProductButtons 
								style={{ 
									display: 'flex',
									justifyContent: 'center'
								}}
								className="white-buttons"/>
						</ProductCard>
					))
				}
			</div>
		</div>
	);
};
