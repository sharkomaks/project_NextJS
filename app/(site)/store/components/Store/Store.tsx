'use client';

import styles from './Store.module.css';
import {StoreProps} from './Store.props';
import Select from '@/components/Select/Select';
import Switch from '@/components/Switch/Switch';
import RangeSelect from '@/components/RangeSelect/RangeSelect';
import Htag from '@/components/Htag/Htag';
import Form from '@/components/Form/Form';
import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';
import FilterIcon from './filter.svg';
import CloseIcon from './close.svg';
import {useEffect, useState} from 'react';
import {Products} from '@/interfaces/products.interface';
import {getProducts} from '@/api/products';
import {motion} from 'framer-motion';
import {useRouter} from 'next/navigation';

function Store({filter, products}: StoreProps) {

	const [open, setOpen] = useState<boolean>(true);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [selectedCategory, setSelectedCategory] = useState<number>();
	const [discounted, setDiscounted] = useState<boolean>(false);
	const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({min: 0, max: filter.maxPrice});
	const [offset, setOffset] = useState<number>(0);
	const [product, setProduct] = useState<Products>(products);
	const router = useRouter();

	const updateURL = () => {
		router.push(`store?offset=${offset}` +
			`${searchQuery ? `&search=${searchQuery}` : ''}` +
			`${selectedCategory ? `&category=${selectedCategory}` : ''}` +
			`${discounted ? `&discounted=${discounted}` : ''}` +
			`&minPrice=${priceRange.min}` +
			`&maxPrice=${priceRange.max}`);
	};

	useEffect(() => {
		setOffset(0);
		updateURL();
		prod();
	}, [searchQuery, selectedCategory, discounted, priceRange]);

	useEffect(() => {
		updateURL();
		prod();
	}, [offset]);

	const prod = async () => {
		const products = await getProducts({
			name: searchQuery,
			categoryId: selectedCategory,
			priceMin: priceRange.min,
			priceMax: priceRange.max,
			discounted,
			offset
		});
		setProduct(products);
	};

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%'
		}
	};

	return (
		<div className={styles['store']}>
			<Htag tag={'h1'}>Каталог товаров</Htag>
			<button
				onClick={() => setOpen(true)}
				className={styles['filter-menu']}>
				<FilterIcon/>
				Фильтры
			</button>
			<motion.div
				variants={variants}
				initial={'opened'}
				animate={open ? 'opened' : 'closed'}
				className={styles['filter']}>
				<CloseIcon onClick={() => setOpen(false)}/>
				<Form type={'search'} submit={setSearchQuery}/>
				<Select option={filter.categories} onChange={e => setSelectedCategory(Number(e.target.value))}/>
				<RangeSelect max={filter.maxPrice} setPriceRange={setPriceRange}/>
				<div className={styles['sales']}>
					Со скидкой
					<Switch enable={discounted} setEnable={setDiscounted}/>
				</div>
			</motion.div>
			<div className={styles['card-list']}>
				{product.products.map((p, i) => <Card key={i} product={p}/>)}
			</div>
			<div className={styles['offset']}>
				<Button onClick={() => setOffset(o => o < 1 ? 0 : --o)}>&lt;</Button>
				<Button color={'black'}>{offset + 1}</Button>
				<Button onClick={() => setOffset(o => !product.products.length ? o : ++o)}>&gt;</Button>
			</div>
		</div>
	);
}

export default Store;