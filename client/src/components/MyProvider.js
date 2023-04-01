import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [state, setState] = useState({ count: 0 });

  const increment = () => {
    setState(prevState => ({
      ...prevState,
      count: prevState.count + 1
    }));
  };

  const decrement = () => {
    setState(prevState => ({
      ...prevState,
      count: prevState.count - 1
    }));
  };

  return (
    <MyContext.Provider value={{ state, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
