import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../app/store'
import { User, UserRole } from './type/index'
import Cookies from 'js-cookie';


const initialState : User = {
	    uid: '',
		role:  Cookies.get('user')
			? JSON.parse(`${Cookies.get('user')}`).role
			: UserRole.GUEST,
		email: '',
		firstName: '',
		lastName:'',
		authenticating: false,
		authenticated: false,
		isGuest: false,
		error: false,
		loaded: false
	}

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
	setLoggedIn: (state: User, action: PayloadAction<boolean>) => {
		state.authenticated = action.payload;
	},
    setLogInSuccess: (state: User, action: PayloadAction<User>) => {
		state.uid = action.payload.uid;
		state.role = action.payload.role;
		state.email = action.payload.email;
		state.firstName = action.payload.firstName;
		state.lastName = action.payload.lastName;
		state.authenticating = action.payload.authenticating;
		state.authenticated = action.payload.authenticated;
		state.isGuest = action.payload.isGuest;
		state.error = action.payload.error;
		state.loaded = action.payload.loaded;
	},
    setLogInFaliure: (state: User, action: PayloadAction<string>) => {
		state.authenticating = false;
		state.isGuest = false;
	},
	setLogoutSuccess: (state: User) => {
		state = initialState;
	},
	setLogoutFailure: (state: User, action: PayloadAction<string>) => {
		state.authenticating = false;
		state.isGuest = false;
	},
	setCurrentRole: (state: User, action: PayloadAction<UserRole>) => {
		state.role = action.payload;
	},
	setFaliure: (state: User, action: PayloadAction<boolean>) => {
		state.error = action.payload;
	},
    
  }
})

export const { setLoggedIn, setLogInSuccess, setLogoutFailure, 
	setLogoutSuccess, setLogInFaliure,
	setCurrentRole, setFaliure
} = AuthSlice.actions


export default AuthSlice.reducer



