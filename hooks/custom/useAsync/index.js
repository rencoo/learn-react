import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';

function App() {
  return (
    <>
      <UserList />
    </>
  );
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);