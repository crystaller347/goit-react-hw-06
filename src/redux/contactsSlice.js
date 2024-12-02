import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
    },
    reducers: {
        addContact: (state = initialState, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state = initialState, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;