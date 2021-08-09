import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isAuth: boolean;
  name: string;
  email: string;
  token: string;
  role: string;
}

const userInitialState = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
  role: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    login: (state, action) => {
      const { email, name, token, role } = action.payload;
      state.isAuth = true;
      state.email = email;
      state.name = name;
      state.token = token;
      state.role = role;
    },
    logout: (state) => {
      state.isAuth = false;
      state.email = '';
      state.name = '';
      state.token = '';
      state.role = '';
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectCurrentUser = (state: UserState) => state;

export default userSlice.reducer;
