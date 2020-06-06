import { createSlice } from '@reduxjs/toolkit';
import data from '../assets/data.json'; // data of test
import socket from '../socket';

const messageSlice = createSlice({
  name: 'messages',
  initialState: data,
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

export const { saveMessage, sendMessage } = messageSlice.actions;

export default messageSlice.reducer;
