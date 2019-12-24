import React from 'react';
import './App.css';
import InputForm from './components/InputForm'

import { Card } from 'react-bootstrap'

function App() {
  
  return (
    <Card className="App">
      <Card.Header as="h6">Asset & Liability Tracker</Card.Header>
      <InputForm></InputForm>
    </Card>
  )
}

export default App;
