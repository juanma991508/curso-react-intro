import React from 'react';

function TodosLoading() {
  return (
    <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  );
}

export { TodosLoading };