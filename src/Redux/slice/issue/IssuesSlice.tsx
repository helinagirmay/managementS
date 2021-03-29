import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../store'
import { User, UserRole } from './type/index'


const initialState : User = {
    uid: '',
	role: UserRole.TECH_SUPPORT,
	email: '',
	authenticated: false,
	isGuest: false,
	error: false,
	loaded: false
	}

export const IssuesSlice = createSlice({
  name: 'Issues',
  initialState, 
  reducers: {
	
    
  }
})

export const { 
} = IssuesSlice.actions


export default IssuesSlice.reducer



