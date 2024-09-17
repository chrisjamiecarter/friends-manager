import React from 'react';
import { useSelector } from 'react-redux';

const ErrorDisplay = () => {
  const error = useSelector((state) => state.apiStatus.error);

  if (!error) return null;

  return <div className="error-message">{error}</div>;
};

export default ErrorDisplay;
