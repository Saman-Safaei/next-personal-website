import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  initialState: {
    isSidebarOpen: false,
  },
  name: 'ui',
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
  },
});

export const actions = uiSlice.actions;
export default uiSlice;
