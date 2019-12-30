import React, { useState } from 'react';
import '../App.css';
import { Table } from 'react-bootstrap'

function TableView() {
    
    const getRows = () => {
        // TODO: query the rows from mysql
        
        var dummy = [
            {
                'type': "asset",
                'name': "dummy asset",
                'balance': 10
            },
            {
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
                    <td>DELETE</td>
                </tr>
            )
        })
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