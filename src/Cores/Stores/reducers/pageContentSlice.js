import { createSlice } from "@reduxjs/toolkit";

export const pageContentSlide = createSlice({
    name: 'pageContent',
    initialState: {
       title: ''
    },
    reducers: {
        setPageTitle: (state, action) => {
            state.title = action.payload;
        }
    }
})

export const { setPageTitle } = pageContentSlide.actions;

export const pageContentReducer = pageContentSlide.reducer;

export default pageContentSlide.reducer