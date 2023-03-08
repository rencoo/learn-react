import React from "react";

export function withPersistence(storageKey, storage) {
  return function(WrappedComponent) {
    return class PersistentComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          initialValue: storage.getItem(storageKey)
        };
      }

      render() {
        // HOC props透传
        return (
          <WrappedComponent
            initialValue={this.state.initialValue}
            saveValue={this.saveValue}
            {...this.props}
          ></WrappedComponent>
        );
      }

      saveValue(value) {
        storage.setItem(storageKey, value);
      }
    };
  };
}

export default withPersistence;

// withPersistence组件使用方式如下
// const LocalStoragePersistentForm = withPersistence('key', localStorage)(PersistentComponent);
