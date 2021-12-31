import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlide = createSlice({
    name: 'sidebar',
    initialState: {
        opened: false
    },
    reducers: {
        toggleMenu: (state) => {
            state.opened = !state.opened;
        },
        showMenu: (state) => {
            state.opened = true;
        },
        closeMenu: (state, action) => {
            state.opened = false;
        }
    }
})

export const { toggleMenu, showMenu, closeMenu } = sidebarSlide.actions;

export const sidebarReducer = sidebarSlide.reducer;

export default sidebarSlide.reducer