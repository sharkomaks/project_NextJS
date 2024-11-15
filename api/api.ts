export const API = {
	store: {
		filter: process.env.NEXT_PUBLIC_DOMAIN + '/api-demo/products/get-filter',
		products: process.env.NEXT_PUBLIC_DOMAIN + '/api-demo/products'
	},
	product: {
		find: process.env.NEXT_PUBLIC_DOMAIN + '/api-demo/products/sku'
	},
	auth: {
		login: process.env.NEXT_PUBLIC_DOMAIN + '/api-demo/auth/login',
		register: process.env.NEXT_PUBLIC_DOMAIN + '/api-demo/auth/register',
		restore: process.env.NEXT_PUBLIC_DOMAIN + '/api-demo/auth/restore'
	},
	user: {
		profile: process.env.NEXT_PUBLIC_DOMAIN + '/api-demo/user/profile'
	},
	order: {
		create: process.env.NEXT_PUBLIC_DOMAIN + '/api-demo/order',
		find: process.env.NEXT_PUBLIC_DOMAIN + '/api-demo/order/',
		orders: process.env.NEXT_PUBLIC_DOMAIN + '/api-demo/order/my'
	}
};