import { createSlice } from '@reduxjs/toolkit';

const initialLanguage = localStorage.getItem('language') || 'en';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        value: initialLanguage,
    },
    reducers: {
        setLanguage: (state, action) => {
            state.value = action.payload;
            localStorage.setItem('language', action.payload);
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
