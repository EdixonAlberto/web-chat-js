import React from 'react';

const Message = (props) => {
  const date = props.date;
  const replyForm = '';

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
            <div className="">
              <span className="Discussion-date">{date}</span>
            </div>
          </div>

          <div className="Discussion-text">{props.text} </div>

          <div className="Discussion-bottom">
            <div className="Discussion-bottomLeft">
              <span>
                <span className="Discussion-vote Discussion-voteUp icon-plus_A "></span>

                <span className="Discussion-vote Discussion-voteDown icon-minus_A "></span>

                <span className="Discussion-points">points</span>
              </span>
            </div>
            <div className="Discussion-bottomRight"></div>
          </div>
        </div>

        <div className="Discussion-editor">{replyForm}</div>
      </div>
    </div>
  );
};

export default Message;
