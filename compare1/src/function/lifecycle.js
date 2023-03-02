import React from "react"
import { log } from "../../../utils"

function withLifecycle(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      log('HOC componentDidMount invoked')
    }

    // ... 其他生命周期

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}

export default withLifecycle
