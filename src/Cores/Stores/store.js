import { configureStore } from "@reduxjs/toolkit";
import { sidebarReducer } from "./reducers/sidebarSlice";
import { pageContentReducer } from "./reducers/pageContentSlice"
import { todoReducer } from "./reducers/todoSlice";

export default configureStore({
    reducer: {
        sidebar: sidebarReducer,
        pageContent: pageContentReducer,
        todoList: todoReducer
    }
})