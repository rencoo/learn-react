import { createStore } from 'redux';

// 定义 Store 的初始值
const initialState = { value: 0 };

// Reducer，处理 Action 返回新的 State
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// 利用 Redux API 创建一个 Store，参数就是 Reducer
const store = createStore(counterReducer);

// Store 提供了 subscribe 用于监听数据变化
store.subscribe(() => console.log(store.getState()));

export default store;
