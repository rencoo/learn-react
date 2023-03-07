import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { log } from '../../utils/index';

// 在 Toolbar 组件中使用一个会使用 Theme 的 Button

// 未使用React.memo或者React.PureComponent的话，只要Context变化，其沿途的所有子组件都会自动刷新（和props变化引起子组件重渲类似）
// function Toolbar(props) {
//   log('Context沿途组件Toolbar invoked');
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

const Toolbar = React.memo(function Com(props) {
  log('Context沿途组件Toolbar invoked');
  return (
    <div>
      <ThemedButton />
    </div>
  );
});

// 在 Theme Button 中使用 useContext 来获取当前的主题
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{
      background: theme.background,
      color: theme.foreground
    }}>
      I am styled by theme context!
    </button>
  );
}

export default Toolbar;
