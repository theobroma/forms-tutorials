import React from 'react';

const TextError: React.FC = ({ children }) => {
  return <div className="field-error">{children}</div>;
};

export default TextError;
