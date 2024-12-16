import { configureStore } from "@reduxjs/toolkit";
import abc from "./NavbarSlice";
import user from "./DataSlice";


export const store = configureStore({
reducer: {
Counter : abc ,
DataStore : user

},
})

 export default store;