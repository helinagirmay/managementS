export enum UserRole {
	ADMIN = 'ADMIN',
	TECH_SUPPORT = 'TECH_SUPPORT',
    SALES = 'SALES',
	USER = 'USER',
}

export interface IClientState {
	client: IClient;
	clients: IClient[];
	loading: boolean;
	error?: string;
}

export interface IClient {
	clientid: string;
	email: string;
	firstName: string;
	lastName: string;
	tinNumber: string;
	address: string;
	city: string;
	country: string;
	authenticating: boolean;
	authenticated: boolean;
	isGuest: boolean;
}