import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'
import styles from './index.module.css'
import Child from './child';

function App() {
  return (
    <div className={styles.div}>
      hello
      <Child />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))