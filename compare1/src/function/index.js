import React from "react"
import withLifecycle from './lifecycle'

const FunctionComponent = (props) => (
  <div>component child</div>
);

const FunctionComponentWithLifecycle = withLifecycle(FunctionComponent)

export default FunctionComponentWithLifecycle
