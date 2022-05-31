import { configureStore } from "@reduxjs/toolkit";
import {
  stockListReducer,
  stockCreateReducer,
  stockDeleteReducer,
} from "./reducers/stockReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const preloadedState = {
  userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    stockList: stockListReducer,
    stockCreate: stockCreateReducer,
    stockDelete: stockDeleteReducer,
  },
  preloadedState,
});
