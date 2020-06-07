import React from 'react';

const Message = (props) => {
  const imgPath = require('../assets/logo.svg');

  return (
    <div id={props.id}>
      <div className="Discussion is-first  is-shadow">
        <div className="Discussion-wrapper">
          <div className="Discussion-top">
            <div className="DiscussionAuthor">
              <span className="DiscussionAuthor-name">
                <img
                  src={imgPath}
                  className="DiscussionAuthor-avatar"
                  width="40"
                  height="40"
                />
                <a href="#" title="Ver perfil de usuario" target="_blank">
                  {props.user}
                </a>
              </span>
            </div>

            <div>
              <span className="Discussion-date">{props.date}</span>
            </div>
          </div>

          <div className="Discussion-text">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
