import React, { useEffect, useState } from 'react'

// 模拟请求
function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          posts: [
            { title: '1', id: 1 },
            { title: '2', id: 2 }
          ]
        }
      })
    }, 500)
  })
}

function FunctionComponent() {
  const [data, setData] = useState({ posts: [] });
  useEffect(() => {
    (async () => {
      const result = await fetchPosts();
      setData(result.data);
    })()
  }, []);

  return (
    <ul>{data.posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>
  );
}

export default FunctionComponent
