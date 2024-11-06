export const calculateOldPrice = (newPrice: number, sale: number): number => {
	return newPrice / (1 - sale / 100);
};