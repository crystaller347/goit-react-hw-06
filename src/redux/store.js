import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contactsSlice.js'
import filtersReducer from './filtersSlice.js'

const initialState = {
    filters: {
        name: ""
    }
}


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
});