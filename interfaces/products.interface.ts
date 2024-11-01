export interface Products {
	totalProducts: number;
	limit: number;
	offset: number;
	products: Product[];
}

export interface Product {
	name: string;
	price: number;
	discount?: number;
	description: string;
	images: string[];
	categoryId: number;
	sku: number;
	reviews: Review[];
}

export interface Review {
	name: string;
	rating: number;
	date: string;
	description: string;
}