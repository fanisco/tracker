import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    logout: () => initialState,
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
