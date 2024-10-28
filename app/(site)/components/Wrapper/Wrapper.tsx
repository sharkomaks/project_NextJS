import {WrapperProps} from './Wrapper.props';

function Wrapper({children}: WrapperProps) {
	return (
		<>
			<header>Header</header>
			<main>{children}</main>
			<footer>Footer</footer>
		</>

	);
}

export default Wrapper;