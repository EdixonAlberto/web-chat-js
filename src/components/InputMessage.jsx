import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { sendMessage } from '../store';

const InputMessage = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const submit = (e) => {
    if (e) e.preventDefault();

    sendMessage({
      id: uuid(),
      text: message
    });

    setMessage('');
  };

  const change = (e) => setMessage(e.target.value);

  const keyEnter = (e) => {
    return e.target.name === 'textArea' && (e.key === 'Enter' || e.keyCode === 13);
  };

  const handlerKeyDown = (e) => {
    if (keyEnter(e)) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const handlerKeyUp = (e) => {
    if (keyEnter(e)) {
      submit();
    }
  };

  // To fix error with lastpass extension.
  // More in: https://github.com/KillerCodeMonkey/ngx-quill/issues/351#issuecomment-511005303
  document.addEventListener('keydown', handlerKeyDown, true);

  return (
    <div className="input-message">
      <form className="form-group p-4" autoComplete="off" onSubmit={submit}>
        <div className="row">
          <div className="col-1"></div>

          <div className="col-9">
            <textarea
              className="form-control w-full"
              name="textArea"
              rows="2"
              autoFocus
              value={message}
              onChange={change}
              onKeyUp={handlerKeyUp}
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>

          <div className="col-2">
            <button className="btn btn-primary w-auto h-100" type="submit" value="send">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = { sendMessage };

export default connect(null, mapDispatchToProps)(InputMessage);
