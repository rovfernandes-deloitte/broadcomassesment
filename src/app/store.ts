import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import projectReducer from "../feature/project/projectSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    project: projectReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
