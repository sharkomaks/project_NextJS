export function load<T>(key: string): T | undefined {
	const data = localStorage.getItem(key);
	if (data) return JSON.parse(data);
}

export function save(key: string, data: string) {
	localStorage.setItem(key, data);
}