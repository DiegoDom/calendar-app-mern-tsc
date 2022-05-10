import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { calendarReducer } from '../reducers/calendarReducer';

import { uiReducer } from '../reducers/uiReducer';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    calendar: calendarReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

/* OLD WAY */

/* import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { calendarReducer } from '../reducers/calendarReducer';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
 */
