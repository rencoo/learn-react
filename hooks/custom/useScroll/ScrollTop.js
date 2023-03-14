import React, { useCallback } from 'react';
// import { useScroll } from 'ahooks';
import useScroll from './useScroll';

function ScrollTop() {
  const { y } = useScroll();
  // const { top: y } = useScroll(document.body); // ahooks

  const goTop = useCallback(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const style = {
    position: 'fixed',
    right: '10px',
    bottom: '10px',
  };

  // 当滚动条位置纵向超过 300 时，显示返回顶部按钮
  if (y > 300) {
    return (
      <button onClick={goTop} style={style}>
        Back to Top
      </button>
    );
  }

  // 否则不 render 任何 UI
  return null;
}

export default ScrollTop;
