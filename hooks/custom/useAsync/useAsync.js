import { useCallback, useState } from 'react';

const useAsync = (asyncFunction) => {
  // 设置所有请求都通用的三个异步逻辑相关的 useState
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 制定一个callback用于执行异步逻辑
  const execute = useCallback(() => {
    // 请求开始时，设置 loading 为 true，清除已有数据和 error 状态
    setLoading(true);
    setData(null);
    setError(null);

    // return asyncFunction() // 没有必要return？
    asyncFunction()
      .then((response) => {
        // 请求成功时，将数据写进 state，设置 loading 为false
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        // 请求失败时，设置loading为false，并设置错误状态
        setError(error);
        setLoading(false);
      });
  }, [asyncFunction]);

  return { execute, loading, data, error };
};

export default useAsync;
