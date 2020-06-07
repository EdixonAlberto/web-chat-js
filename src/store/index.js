import { createSlice, combineReducers } from '@reduxjs/toolkit';
// import data from './data.json'; // data of test
import socket from '../socket';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    addUser(state, action) {
      const { name } = action.payload;
      state.name = name;
    }
  }
});

const messageSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    saveMessage(state, action) {
      const newMessage = action.payload;
      state.push(newMessage);
    },

    sendMessage(state, action) {
      const message = action.payload;
      socket.emit('newMessage', message);
    }
  }
});

const reducers = combineReducers({
  user: userSlice.reducer,
  message: messageSlice.reducer
});

export const { saveMessage, sendMessage } = messageSlice.actions;
export const { addUser } = userSlice.actions;

export default reducers;
