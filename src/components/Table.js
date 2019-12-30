import React, { useState } from 'react';
import $ from 'jquery'
import '../App.css';
import { Table, Button } from 'react-bootstrap'

function TableView() {
    
    const getRows = () => {
        // TODO: query the rows from mysql
        
        var dummy = [
            {
                'id': 0,
                'type': "asset",
                'name': "dummy asset",
                'balance': 10
            },
            {
                'id': 1,
                'type': "liability",
                'name': "dummy liability",
                'balance': -5
            },
        ]
        return dummy
    }

    const [rows, setRows] = useState(getRows());

    const renderTable = () => {
        return rows.map((row, index) => {
            const {id, type, name, balance} = row
            return (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{name}</td>
                    <td>{balance}</td>
                    <td><Button variant="danger" type="submit" onClick={(e) => deleteRow(id)}>Delete</Button></td>
                </tr>
            )
        })
    }

    const deleteRow = (id) => {
        alert(`Deleting row with ID: ${id}`)

        // TODO: sql query to delete from table
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Balance</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderTable()}
            </tbody>
        </Table>
    )
}

export default TableView;