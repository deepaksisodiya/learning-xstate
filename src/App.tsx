import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import Logo from './assets/react.svg';
import Todos from './modules/todos/Todos';
import { machine } from './machines/todoMachine';
import { useMachine } from '@xstate/react';

function App() {
  const [state, send] = useMachine(machine);

  return (
    <>
      <Navigation />

      {JSON.stringify(state.value)}

      <button
        onClick={() => {
          send({ type: 'todos loaded' });
        }}
      >
        todos loaded
      </button>

      <button
        onClick={() => {
          send({ type: 'loading todos error' });
        }}
      >
        loading todos failed
      </button>

      <h2>API End Point: {JSON.stringify(import.meta.env.VITE_APP_API_URL)}</h2>
      <Logo />
      <h1>React Template</h1>
      <div id="detail">
        <Outlet />
      </div>

      <Todos />
    </>
  );
}

export default App;
