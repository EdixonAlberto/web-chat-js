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
      <form onSubmit={submit}>
        <div className="form-group">
          <label className="">Escribe tu Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control text-center"
            id="inputName"
            onChange={change}
            value={name}
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Entrar
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
