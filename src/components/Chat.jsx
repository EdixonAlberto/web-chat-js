import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import InputMessage from './InputMessage';
import { saveMessage } from '../store';
import socket from '../socket';

const Chat = ({ saveMessage }) => {
  useEffect(() => {
    function listeningMessages() {
      socket.on('message', (message) => {
        saveMessage(message);
      });
    }

    listeningMessages();
  });

  return (
    <div className="container">
      <Content />
      <InputMessage />
    </div>
  );
};

const mapDispatchToProps = { saveMessage };

export default connect(null, mapDispatchToProps)(Chat);
