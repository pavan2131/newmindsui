import { configureStore } from '@reduxjs/toolkit';
import changeNum from './reducers/reducer';
import reducer from './reducers/reducer';
const store = configureStore({
    reducer: reducer,
});

export default store;