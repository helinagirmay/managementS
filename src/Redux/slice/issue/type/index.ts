export enum UserRole {
	ADMIN = 'ADMIN',
	TECH_SUPPORT = 'TECH_SUPPORT',
    SALES = 'SALES',
	USER = 'USER',
}

export interface User {
	uid: string;
	role: UserRole;
	email: string;
	authenticated: boolean;
	isGuest: boolean;
	error: boolean;
	errorMessage?: string;
	loaded: boolean;
}