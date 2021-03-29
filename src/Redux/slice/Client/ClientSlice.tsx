import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState, AppThunk } from '../../../app/store'
import { IClient, IClientState, UserRole } from './type/index'
import Cookies from 'js-cookie';
import FB from '../../../firebase/config'


const initialState : IClientState = {
		client:{
			clientid: '',
			email: '',
			firstName: '',
			lastName: '',
			tinNumber: '',
			address: '',
			city: '',
			country: '',
			authenticating: false,
			authenticated: false,
			isGuest: false,
			},
		clients : [],
		loading: false,
		
	}

export const ClientSlice = createSlice({
  name: 'RegisterClient',
  initialState, 
  reducers: {
	setRegistered: (state: IClientState, action: PayloadAction<boolean>) => {
		state.client.authenticated = action.payload;
	},
	setClients : (state: IClientState, action: PayloadAction<IClient[]>) =>{
		state.clients = action.payload
	},
    setRegistrationSuccess: (state: IClientState, action: PayloadAction<IClient>) => {
		state.client = action.payload
		state.clients = [...state.clients, state.client]
		 
	},
    setRegistrationFaliure: (state: IClientState, action: PayloadAction<string>) => {
		state.client.authenticating = false;
	},
	setFaliure: (state: IClientState, action: PayloadAction<string>) => {
		state.error = action.payload;
	},
    
  }
})

export const { setRegistered, setClients,  setRegistrationFaliure, setRegistrationSuccess,} = ClientSlice.actions


export default ClientSlice.reducer




export const createClient = (client: IClient): AppThunk => async (dispatch) => {
	const firestore = FB.firestore();
	try {
		
		let data = await firestore.collection('clients').add(client);
		console.log("Data-1", data.id);
		
	} catch (error) {
		throw error
		
	}
	console.log('added');
	
}

export const getClient = (): AppThunk => async (dispatch) => {
	const firestore = FB.firestore();
	try {
		FB.firestore()
			.collection('clients')
			.get()
			.then((querySnapshot) => {
				let allData: IClient[] = [];
				querySnapshot.forEach((doc) => {
					console.log("Data", doc.data());
					
					allData.push(({...doc.data(), id: doc.id} as unknown) as IClient);
				});
				dispatch(setClients(allData));
				
			})
					
	} catch (error) {
		throw error
		
	}
	console.log('added');
	
}

export const selectClients = (state: RootState) => state.Client.clients;
export const selectClient = (state: RootState) => state.Client.client;
export const selectClientLoading = (state: RootState) => state.Client.loading;