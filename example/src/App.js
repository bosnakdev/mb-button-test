import React from 'react'

import { Button } from 'mb-button-test'
import 'mb-button-test/dist/index.css'

const App = () => (
  <>
    <Button text="Test Button" type="primary" color="info" />
    <Button text="Test Button" type="default" color="info" />
    <Button text="Test Button" type="dashed" color="info" />
    <Button text="Test Button" type="text" color="info" />
    <Button text="Test Button" type="link" color="info" />
    <br/>
    <br/>
    <Button text="Test Button" type="primary" color="success" />
    <Button text="Test Button" type="default" color="success" />
    <Button text="Test Button" type="dashed" color="success" />
    <Button text="Test Button" type="text" color="success" />
    <Button text="Test Button" type="link" color="success" />
    <br/>
    <br/>
    <Button text="Test Button" type="primary" color="danger" />
    <Button text="Test Button" type="default" color="danger" />
    <Button text="Test Button" type="dashed" color="danger" />
    <Button text="Test Button" type="text" color="danger" />
    <Button text="Test Button" type="link" color="danger" />
    <br/>
    <br/>
    <Button text="Test Button" type="primary" color="warning" />
    <Button text="Test Button" type="default" color="warning" />
    <Button text="Test Button" type="dashed" color="warning" />
    <Button text="Test Button" type="text" color="warning" />
    <Button text="Test Button" type="link" color="warning" />
  </>
)

export default App
