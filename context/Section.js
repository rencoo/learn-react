import React, { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children }) {
  const level = useContext(LevelContext); // 最外层的Section组件拿到的level是初始值0
  // level会变化
  // console.log('===level===', level);
  return (
    <section className="section">
      {/* children组件里拿到的level是provider的值，1、2、3 */}
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
