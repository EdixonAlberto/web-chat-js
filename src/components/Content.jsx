import React, { useEffect } from 'react';
import Message from './Message';
import { connect } from 'react-redux';

const Content = ({ messagesList, user }) => {
  useEffect(() => {
    function scrollBottom() {
      const messagesList = document.getElementsByClassName('messages-list')[0];
      messagesList.scrollTop = messagesList.scrollHeight;
    }

    scrollBottom();
  });

  return (
    <div className="content mt-5">
      <div className="row">
        <div className="col-1"></div>

        <div className="messages-list col-10">
          {messagesList.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              user={user.name}
              date={message.date}
            />
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
    messagesList: state.message,
    user: state.user
  };
};

export default connect(mapStateToProps, null)(Content);
