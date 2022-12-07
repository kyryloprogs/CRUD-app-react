import { configureStore, combineReducers } from '@reduxjs/toolkit';
import usersSlice from './user-slice';
import storage from 'redux-persist/lib/storage';
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist';

const rootReducer = combineReducers({
    users: usersSlice
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    // reducer: {
    //     users: usersSlice
    // },
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;