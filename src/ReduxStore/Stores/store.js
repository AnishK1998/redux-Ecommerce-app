import {configureStore} from "@reduxjs/toolkit"
import cartItem from "../Slices/cartItem"
import {persistReducer} from "redux-persist"
import {combineReducers} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"

const persistConfiguration = {
    key: "root",
    version: 1,
    storage
}
const CombinedReducer = combineReducers({
    addToCart: cartItem
})
const persistedReducer = persistReducer(persistConfiguration,CombinedReducer)

export const store = configureStore({
    reducer: persistedReducer
})

