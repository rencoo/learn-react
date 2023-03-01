import React from 'react';

class Profile extends React.Component {
  // showMessage = () => {
  //   alert('用户是' + this.props.user); // 这里的 this 存在一定的模糊性，容易引起错误使用
  // }

  // handleClick = () => {
  //   setTimeout(this.showMessage, 3 * 1000);
  // };

  // 修正为
  showMessage = (user) => {
    alert('用户是' + user);
  }

  handleClick = () => {
    const { user } = this.props;
    setTimeout(() => this.showMessage(user), 3 * 1000);
  }

  render() {
    return <button onClick={this.handleClick}>查询</button>;
  }
}

export default Profile;
