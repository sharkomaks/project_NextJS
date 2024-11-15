import {useEffect, useState} from 'react';

export function useLocalStorage<T>(key: string, initialData: T) {
	const [data, setData] = useState<T>(initialData);

	useEffect(() => {
		const res = localStorage.getItem(key);
		if (res) {
			setData(JSON.parse(res));
		}
	}, []);

	const saveData = (newData: T) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};
	return [data, saveData] as const;
}