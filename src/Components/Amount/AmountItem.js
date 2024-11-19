import React from 'react';

const AmountItem = ({ item, available }) => {
  return (
    <li className="flex items-center space-x-2">
      {available ? (
        <span className="text-blue-500">✔️</span>
      ) : (
        <span className="text-gray-400">❌</span>
      )}
      <span>{item}</span>
    </li>
  );
};

export default AmountItem;
