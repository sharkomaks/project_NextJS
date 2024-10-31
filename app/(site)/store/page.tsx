import Button from '@/components/Button/Button';
import Select from '@/components/Select/Select';
import Switch from '@/components/Switch/Switch';
import RangeSelect from '@/components/RangeSelect/RangeSelect';

const category = [
	{
		name: 'Золото',
		categoryId: 1
	}, {
		name: 'Серебро',
		categoryId: 2
	}
];

export default function Store() {
	return (
		<div>
			<Button>Добавить в корзину</Button>
			<Button color={'black'}>Отправить</Button>
			<Select option={category}></Select>
			<Switch/>
			<RangeSelect max={180}/>
		</div>
	);
}