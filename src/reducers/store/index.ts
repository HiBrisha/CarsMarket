// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '~reducers/TypeCars';

const store = configureStore({
    reducer: rootReducer,
});

export default store;
