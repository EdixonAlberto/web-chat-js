import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../store';

const InputMessage = ({ sendMessage, user }) => {
  const [message, setMessage] = useState('');

  const submit = (e) => {
    if (e) e.preventDefault();

    sendMessage({
      emiter: user.name,
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
      const button = document.getElementById('btn-in-message');
      button.click();
    }
  };

  // To fix error with lastpass extension.
  // More in: https://github.com/KillerCodeMonkey/ngx-quill/issues/351#issuecomment-511005303
  document.addEventListener('keydown', handlerKeyDown, true);

  return (
    <div className="form-input-message">
      <form className="form-group py-4" autoComplete="off" onSubmit={submit}>
        <div className="row">
          <div className="col-1"></div>

          <div className="text-area col-9">
            <textarea
              className="form-control w-full"
              name="textArea"
              rows="2"
              autoFocus
              value={message}
              onChange={change}
              onKeyUp={handlerKeyUp}
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>

          <div className="button col-1 text-right">
            <button
              id="btn-in-message"
              className="btn btn-primary w-full h-100"
              type="submit"
              value="send"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = { sendMessage };

export default connect(mapStateToProps, mapDispatchToProps)(InputMessage);
