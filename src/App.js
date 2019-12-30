import React from 'react';
import './App.css';
import InputForm from './components/InputForm'
import TableView from './components/Table'

import { Card } from 'react-bootstrap'

function App() {
  
  return (
    <Card className="App">
      <Card.Header as="h6">Asset & Liability Tracker</Card.Header>
      <InputForm></InputForm>
      <TableView></TableView>
    </Card>
  )
}

export default App;
