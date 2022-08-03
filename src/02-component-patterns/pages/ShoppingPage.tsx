import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

const product = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png',
};

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
					className="bg-dark text-white" 
					product={product}>
					<ProductImage   className="custom-image" />
					<ProductTitle   className="text-bold"	 />
					<ProductButtons className="white-buttons"/>
				</ProductCard>

				<ProductCard 
					product={product}
					style={{
						backgroundColor: '#26bfff'
					}}>
					<ProductImage 
						style={{ boxShadow: '7px 7px 2px rgba(0, 0, 0, 0.25)'}}
					/>
					<ProductTitle 
						style ={{ fontWeight: 'bold' }}
					/>
					<ProductButtons 
						style={{
							display: 'flex',
							justifyContent: 'end'
						}} 
					/>
				</ProductCard>
			</div>
		</div>
	);
};
