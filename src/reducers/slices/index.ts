// rootReducer.ts
import { combineReducers } from 'redux';
import typeCarReducer from './TypeCars';
import isLoginReducer from './isLogin'

const rootReducer = combineReducers({
    typesCar: typeCarReducer,
    isLogin:isLoginReducer
});

export default rootReducer;
