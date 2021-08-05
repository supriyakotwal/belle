import {combineReducers} from 'redux';
import product from './products';
import login from './login'
const rootReducer = combineReducers({
    product,
    login
})

export default rootReducer;