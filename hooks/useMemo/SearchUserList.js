import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { log } from '../../utils/index';

export default function SearchUserList() {
  const [users, setUsers] = useState(null);
  const [searchKey, setSearchKey] = useState('');
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(
    () => setCount(count + 1),
    [count], // 只有当 count 发生变化时，才会重新创建回调函数
  );

  useEffect(() => {
    const doFetch = async () => {
      // 组件首次加载时发请求获取用户数据
      const res = await fetch('https://reqres.in/api/users/');
      setUsers(await res.json());
    };

    doFetch();
  }, []);

  // let usersToShow = null;
  // if (users) {
  //   log('invoked 过滤操作');
  //   // 无论组件为何刷新，这里一定会对数组做一次过滤的操作(获取搜索结果，必须这么做)
  //   // count变化也会执行过滤操作~~~（非必要）
  //   usersToShow = users.data.filter((user) =>
  //     user.first_name.includes(searchKey)
  //   );
  // }

  // 使用 userMemo 缓存计算的结果
  // count变化不会执行useMemo的callback（它依赖的是users和searchKey）
  // searchKey变化会触发 invoked
  const usersToShow = useMemo(() => {
    log('invoked 过滤操作');
    if (!users) return null;
    return users.data.filter((user) => {
      return user.first_name.includes(searchKey);
    });
  }, [users, searchKey]);

  return (
    <div>
      <div>
        count: { count }
        <button onClick={handleIncrement}>+</button>
      </div>
      <input
        type="text"
        value={searchKey}
        onChange={(evt) => setSearchKey(evt.target.value)}
      />
      <ul>
        {usersToShow &&
          usersToShow.length > 0 &&
          usersToShow.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
      </ul>
    </div>
  );
}
