import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import categoryReducer from "./categorySlice";
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
import sessionStorage from 'redux-persist/lib/storage/session'; // Sử dụng sessionStorage

// Cấu hình persist cho auth (hoặc các slice khác nếu cần)
const persistConfig = {
  key: 'auth',
  storage: sessionStorage,  // Đổi từ localStorage sang sessionStorage
};

// Tạo persist reducer cho auth
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Tạo store
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Tạo persistor
export const persistor = persistStore(store);

export default store;