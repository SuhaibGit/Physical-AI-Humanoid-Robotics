import React from 'react';
import Chatbot from './Chatbot';

const Root: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
      {children}
      <Chatbot />
    </>
  );
};

export default Root;