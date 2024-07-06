import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import {thunk} from "redux-thunk";

const store = configureStore({ reducer: rootReducer}, applyMiddleware(thunk));

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
// import thunk from 'redux-thunk';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(thunk),
// });

// export default store;