// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '~reducers/slices';

const store = configureStore({
    reducer: rootReducer,
});

export default store;
