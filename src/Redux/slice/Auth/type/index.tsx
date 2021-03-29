export enum UserRole {
	ADMIN = 'ADMIN',
	TECH_SUPPORT = 'TECH_SUPPORT',
    SALES = 'SALES',
	USER = 'USER',
	GUEST = 'GUEST',
}


export interface User {
	uid: string;
	role: UserRole;
	email: string;
	firstName: string;
	lastName: string;
	authenticating: boolean;
	authenticated: boolean;
	isGuest: boolean;
	error: boolean;
	errorMessage?: string;
	loaded: boolean;
}