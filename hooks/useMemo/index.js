import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import SearchUserList from './SearchUserList';

function App() {
  return (
    <>
      <SearchUserList/>
    </>
  );
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
