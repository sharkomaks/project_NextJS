export interface Profile {
	id: number;
	email: string;
	passwordHash: string;
	address: string | null;
	name: string | null;
	restoreToken?: string | null;
	phone: string | null;
}