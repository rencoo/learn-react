import React from 'react';
import ReactDOM from 'react-dom';
import Utils from "./utils";

// 有点类似插槽，但又不太一样
const ByDevice = ({ children: { mobile, other } }) => {
  return Utils.isMobile() ? mobile : other;
};

function App() {
  return (
    <>
      <ByDevice>
      {{
        mobile: <div>Mobile detected!</div>,
        other: <div>Not a mobile device</div>
      }}
    </ByDevice>
    </>
  );
}

const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
