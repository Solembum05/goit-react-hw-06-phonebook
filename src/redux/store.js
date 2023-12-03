import { configureStore } from "@reduxjs/toolkit";
import { contacctReducer } from "./contacts/reducer";
import { filtersReducer } from "./filter/reducer";


export const store = configureStore({
  reducer: {
    tasks: contacctReducer,
    filters: filtersReducer,
  },
});