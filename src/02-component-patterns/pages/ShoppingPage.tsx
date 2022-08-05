import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
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
				<ProductCard 
					product={product}
					initialValues={{
						count: 1,
						maxCount: 10
					}}
				>
					{
						({ count, increaseBy, maxCount, isMaxCountReached, reset }) => (
							<>
								<ProductImage   />
								<ProductTitle   />
								<ProductButtons />								
							</>
						)
					}
				</ProductCard>
			</div>
		</div>
	);
};
