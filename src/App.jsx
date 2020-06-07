import React, { useState } from 'react';
import Chat from './components/Chat';
import Login from './components/Login';

const App = () => {
  const [session, setSession] = useState(false);

  return <div>{session ? <Chat /> : <Login setSession={setSession} />}</div>;
};

export default App;
