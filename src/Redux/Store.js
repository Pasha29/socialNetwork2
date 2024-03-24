import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from "./Reducers/profileReducer";
import dialogsReducer from "./Reducers/dialogsReducer";
import usersReducer from './Reducers/usersReducer';
import authReducer from './Reducers/authReducer';
import appReducer from './Reducers/appReducer';
import { thunk }from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
