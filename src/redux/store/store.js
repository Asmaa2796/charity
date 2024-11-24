import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../api/charityApi";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  composeWithDevTools,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
