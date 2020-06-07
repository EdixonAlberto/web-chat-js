import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../store';

const Login = ({ setSession, addUser }) => {
  const [name, setName] = useState('');

  const submit = (e) => {
    e.preventDefault();

    addUser({ name });
    setSession(true);
  };

  const change = (e) => setName(e.target.value);

  return (
    <div className="form-login">
      <form autoComplete="off" onSubmit={submit}>
        <div className="form-group">
          <label className="">Escribe tu Nombre</label>
          <input
            className="form-control text-center"
            type="text"
            name="name"
            onChange={change}
            value={name}
            autoFocus
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Entrar
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addUser
};

export default connect(null, mapDispatchToProps)(Login);
