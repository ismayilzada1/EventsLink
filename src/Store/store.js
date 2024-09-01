import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../Store/languageslice';

const store = configureStore({
    reducer: {
        language: languageReducer,
    },
});

export default store;
