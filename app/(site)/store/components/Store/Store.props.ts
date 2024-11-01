import {FilterData} from '@/interfaces/filter.interface';
import {Products} from '@/interfaces/products.interface';

export interface StoreProps {
	filter: FilterData;
	products: Products;
}