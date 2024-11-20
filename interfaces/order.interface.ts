export interface OrderResponse {
	id: number;
	userId: number;
	status: string;
	createdAt: string;
	data: Order[];
}

export interface Order {
	name: string;
	count: number;
	price: number;
}