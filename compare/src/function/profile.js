import React from 'react';

const Profile = (props) => {
  const showMessage = () => {
    alert('用户是' + props.user);
  };
  const handleClick = () => {
    setTimeout(showMessage, 3 * 1000); // 用 setTimeout 来模拟网络请求
  };
  return (
    <button onClick={handleClick}>查询</button>
  );
}

export default Profile;
