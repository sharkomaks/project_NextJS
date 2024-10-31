import styles from './SearchInput.module.css';
import {SearchInputProps} from './SearchInput.props';
import GlassInputIcon from './glass-input.svg';
import cn from 'classnames';

function SearchInput({className}: SearchInputProps) {
	return (
		<div className={cn(styles['search-input'], className)}>
			<input placeholder={'Поиск'} type="text" className={styles['input-search']}/>
			<GlassInputIcon className={styles['input-icon']}/>
		</div>
	);
}

export default SearchInput;