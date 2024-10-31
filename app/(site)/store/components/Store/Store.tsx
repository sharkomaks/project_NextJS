import styles from './Store.module.css';
import {StoreProps} from './Store.props';
import Select from '@/components/Select/Select';
import Switch from '@/components/Switch/Switch';
import RangeSelect from '@/components/RangeSelect/RangeSelect';
import Htag from '@/components/Htag/Htag';
import Form from '@/components/Form/Form';

function Store({filter}: StoreProps) {

	return (
		<div className={styles['store']}>
			<Htag tag={'h1'}>Каталог товаров</Htag>
			<div className={styles['filter']}>
				<Form type={'search'}/>
				<Select option={filter.categories}></Select>
				<RangeSelect max={filter.maxPrice}/>
				<div className={styles['sales']}>
					Со скидкой
					<Switch/>
				</div>
			</div>
			<div className={styles['card-list']}>

			</div>
		</div>
	);
}

export default Store;