import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';
import calendarReducer from './features/calendarSlice';
import authAPI from './services/AuthService';
import eventsApi from './services/EventsService';

const rootReducer = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [eventsApi.reducerPath]: eventsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([authAPI.middleware, eventsApi.middleware]),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
