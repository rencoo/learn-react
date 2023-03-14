import { useState, useEffect } from 'react';

const getPosition = () => {
  return {
    x: document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop, // document.body.scrollTop,
  };
};

const useScroll = () => {
  // 定一个 position 这个 state 保存滚动条位置
  const [position, setPosition] = useState(getPosition());
  useEffect(() => {
    const handler = () => {
      setPosition(getPosition());
    };

    // 监听scroll事件，更新滚动条位置
    document.addEventListener('scroll', handler);

    // 清理
    return () => {
      // 组件销毁时，取消事件监听
      document.removeEventListener('scroll', handler);
    };
  }, []);

  return position; // 响应式的 reactive
};

export default useScroll;
