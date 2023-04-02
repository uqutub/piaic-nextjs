import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./action/user";            // action = slices

// configureStore() returns a preConfigured store instance
export function makeStore() {
  return configureStore({
    reducer: {
        user: userReducer,
    },
  })
}

// store is a singleton instance of the store
export const store = makeStore()

export type RootSTate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch