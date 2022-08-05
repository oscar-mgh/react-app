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
					className="bg-dark text-white"
					initialValues={{
						count: 1,
						maxCount: 10
					}}
				>
					{
						({ count, increaseBy, maxCount, isMaxCountReached, reset }) => (
							<>
								<ProductImage   className="custom-image" />
								<ProductTitle   className="text-bold"	 />
								<ProductButtons className="white-buttons"/>
								<button onClick={() => increaseBy(-2)}>-2</button>
								<button onClick={() => reset()}>reset</button>
								{
									(!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>)
								}								
								<span> {count} - {maxCount}</span>
							</>
						)
					}
				</ProductCard>
			</div>
		</div>
	);
};
