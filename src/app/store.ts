import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import AuthReducer from '../Redux/slice/Auth/AuthSlice';
import ClientReducer from '../Redux/slice/Client/ClientSlice';
import IssueReducer from '../Redux/slice/issue/IssuesSlice';
import {
	getFirebase,
	actionTypes as rrfActionTypes
  } from 'react-redux-firebase'
  import { constants as rfConstants, getFirestore } from 'redux-firestore'


const store = configureStore({
    reducer: {
        Auth: AuthReducer,
        Client: ClientReducer,
        IssueSupport: IssueReducer 
    },
    middleware: getDefaultMiddleware =>
	getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [
			  // just ignore every redux-firebase and react-redux-firebase action type
			  ...Object.keys(rfConstants.actionTypes).map(
				type => `${rfConstants.actionsPrefix}/${type}`
			  ),
			  ...Object.keys(rrfActionTypes).map(
				type => `@@reactReduxFirebase/${type}`
			  )
			],
			ignoredPaths: ['firebase', 'firestore']
		  },
		thunk:{
			extraArgument:{
				getFirebase,
                getFirestore
			}
		}
	})
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
export type AppDispatch = typeof store.dispatch


export default store

