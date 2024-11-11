import {createContext} from 'react';
import {UserContextProps, UserContextType} from '@/context/user.context.props';
import {cartKey, favoritesKey} from '@/helpers/keys';
import {useLocalStorage} from '@/hooks/use-localstorage.hook';
import {CartItem} from '@/interfaces/cart.iterface';
import {Product} from '@/interfaces/products.interface';

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({children}: UserContextProps) => {

	const [dataCart, setDataCart] = useLocalStorage<CartItem[]>(cartKey);
	const [dataFavorites, setDataFavorites] = useLocalStorage<Product[]>(favoritesKey);

	const toggleToFavorites = (product: Product) => {
		const item = dataFavorites.find(f => f.sku === product.sku);
		if (!item) {
			setDataFavorites([...dataFavorites, {...product}]);
		} else {
			setDataFavorites(dataFavorites.filter(f => f.sku !== product.sku));
		}
	};

	const addToCart = (sku: number, count?: number) => {
		const item = dataCart.find(c => c.sku === sku);
		if (!item) {
			setDataCart([...dataCart, {sku, count: count ?? 1}]);
		} else {
			const newData = dataCart.map(c => c.sku === sku ? {...c, count: c.count += 1} : c);
			setDataCart(newData);
		}
	};

	return (
		<UserContext.Provider value={{ addToCart, toggleToFavorites, dataFavorites, dataCart}}>
			{children}
		</UserContext.Provider>
	);
};