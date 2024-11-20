export const formatDate = (date: string) => {
	return new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(new Date(date)).replace('г.', '');
};