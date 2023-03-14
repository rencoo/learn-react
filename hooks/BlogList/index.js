import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import BlogList from './BlogList';

function App() {
  return (
    <>
      <BlogList />
    </>
  );
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
