import React, { useEffect } from 'react';
import Message from './Message';
import { connect } from 'react-redux';

const Content = ({ messagesList }) => {
  useEffect(() => {
    function scrollBottom() {
      const messagesList = document.getElementsByClassName('messages-list')[0];
      messagesList.scrollTop = messagesList.scrollHeight;
    }

    scrollBottom();
  });

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-1"></div>

        <div className="messages-list col-10">
          {messagesList.map((message) => (
            <Message key={message.id} text={message.text} user={'pepe'} date={0} />
          ))}
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    messagesList: state
  };
};

export default connect(mapStateToProps, null)(Content);
