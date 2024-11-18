import {createContext, useEffect, useState} from 'react';
import {UserContextProps, UserContextType} from '@/context/user.context.props';
import {cartKey, expiresAtKey, favoritesKey, tokenKey} from '@/helpers/keys';
import {useLocalStorage} from '@/hooks/use-localstorage.hook';
import {CartItem} from '@/interfaces/cart.interface';
import {Product} from '@/interfaces/products.interface';
import {getProfile} from '@/api/profile';
import {Profile} from '@/interfaces/profile';
import {load} from '@/helpers/localStorage';

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({children}: UserContextProps) => {

	const [dataFavorites, setDataFavorites] = useLocalStorage<Product[]>(favoritesKey, []);
	const [dataCart, setDataCart] = useLocalStorage<CartItem[]>(cartKey, []);
	const [jwt, setJwt] = useLocalStorage<string>(tokenKey, '');
	const [profile, setProfile] = useState<Profile | null>(null);

	useEffect(() => {
		const expiresAt = Number(load<string>(expiresAtKey));
		if (jwt && expiresAt && expiresAt < new Date().getTime()) {
			setJwt('');
			return;
		}
		if (jwt) {
			sendProfile();
		}
	}, [jwt]);

	const sendProfile = async () => {
		if (jwt) {
			const profileData = await getProfile(jwt);
			setProfile(profileData);
		}
	};

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
			const newData = dataCart.map(c => c.sku === sku ? {
				...c,
				count: count ? c.count + count : c.count + 1
			} : c);
			setDataCart(newData);
		}
	};

	const subtractFromCart = (sku: number) => {
		const item = dataCart.find(c => c.sku === sku);
		if (!item) return;
		const newData = dataCart.map(c => c.sku === sku ? {
			...c,
			count: c.count < 2 ? 1 : c.count - 1
		} : c);
		setDataCart(newData);
	};

	const removeFromCart = (sku: number) => {
		const item = dataCart.find(c => c.sku === sku);
		if (!item) return;
		const newData = dataCart.filter(c => c.sku !== sku);
		setDataCart(newData);
	};

	return (
		<UserContext.Provider
			value={{
				dataCart,
				setDataCart,
				addToCart,
				subtractFromCart,
				removeFromCart,
				toggleToFavorites,
				dataFavorites,
				profile,
				jwt,
				setJwt,
				setProfile
			}}>
			{children}
		</UserContext.Provider>
	);
};