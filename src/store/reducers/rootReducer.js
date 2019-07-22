import authReducers from './authReducers'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer} from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducers,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer