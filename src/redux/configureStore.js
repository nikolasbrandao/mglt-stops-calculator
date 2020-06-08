import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import starshipsReducer from "./Starships";

const persistConfig = {
  key: "starWarsStorage",
  storage,
  whitelist: ["starshipsReducer"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    starshipsReducer,
  })
);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
