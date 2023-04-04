import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import uiSlice from '@/store/ui-slice';

const createStore = () => {
  return configureStore({
    reducer: {
      [uiSlice.name]: uiSlice.reducer,
    },
    devTools: false,
  });
};

export type StoreType = ReturnType<typeof createStore>;
export type StoreState = ReturnType<StoreType['getState']>;
export type AppDispatch = StoreType['dispatch'];

export const useSelect: TypedUseSelectorHook<StoreState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default createStore;
