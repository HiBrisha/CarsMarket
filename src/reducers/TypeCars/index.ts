// rootReducer.ts
import { combineReducers } from 'redux';
import typeCarReducer from './slice';

const rootReducer = combineReducers({
    typesCar: typeCarReducer,
    // other reducers...
});

export default rootReducer;
