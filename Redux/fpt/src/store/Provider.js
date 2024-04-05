import { useReducer } from 'react';
import Context from './Context';
import { initState } from './Reducer';
import reducer from './Reducer';

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
