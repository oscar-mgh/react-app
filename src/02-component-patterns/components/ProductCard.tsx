import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
	InitialValues,
	onChangeArgs,
	Product,
	productCardHandlers,
	ProductContextProps,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export interface Props {
	product: Product;
	// children?: React.ReactElement | React.ReactElement[];
	children: ( args: productCardHandlers ) => JSX.Element;
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	initialValues,
	value,
}: Props) => {

	const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
		onChange,
		product,
		value,
		initialValues,
	});
	
	return (
		<Provider
			value={{
				counter,
				increaseBy,
				maxCount,
				product,
			}}>
			<div style={style} className={`${styles.productCard} ${className}`}>
				{ 
					children({
						count: counter,
						isMaxCountReached,
						maxCount: initialValues?.maxCount,
						product,

						increaseBy,
						reset,
					}) 
				}

				{/* <ProductImage img={product.img} />
				<ProductTitle title={product.title} />
				<ProductButtons counter={ counter } increaseBy={ increaseBy } /> */}
				
			</div>
		</Provider>
	);
};
