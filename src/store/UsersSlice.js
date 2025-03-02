import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import database from "../data/database";

export const getOneUser = createAsyncThunk(
  "users/getOneUser",
  async (userId, thunkAPI) => {
    try {
      const user = database.getUser(userId);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (username, thunkAPI) => {
    try {
      const user = database.users.find((user) => user.username === username);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserFriends = createAsyncThunk(
  "users/getUserFriends",
  async (_, thunkAPI) => {
    try {
      const { currentUser } = thunkAPI.getState().users;

      if (!currentUser) {
        throw new Error("Пользователь не найден");
      }

      const friends = database.users.filter((user) =>
        currentUser.friends.includes(user.id)
      );

      return friends;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const initialState = {
  currentUser: null,
  selectedUser: null,
  friends: [],
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedUser = action.payload;
      })
      .addCase(getOneUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getUserFriends.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUserFriends.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.friends = action.payload;
      })
      .addCase(getUserFriends.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
