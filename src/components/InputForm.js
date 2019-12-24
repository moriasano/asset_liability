import React, { useState } from 'react';
import '../App.css';
import { Form, InputGroup, Button } from 'react-bootstrap'

function InputForm() {
    const [type, setType] = useState(0);
    const [name, setName] = useState("Name...");
    const [balance, setBalance] = useState("0.00");

    return (
        <Form>
            <Form.Group>
                {/* Input Fields */}
                <InputGroup>
                    {/* Type */}
                    <Form.Control
                        value={type}
                        as="select"
                        onChange={e => setType(e.target.value)}
                    >
                        <option value="asset">Asset</option>
                        <option value="liability">Liability</option>
                    </Form.Control>

                    {/* Name */}
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    {/* Balance */}
                    <Form.Control
                        value={balance}
                        type="number"
                        step="0.01"
                        onChange={e => setBalance(e.target.value)}
                    /> 
                </InputGroup>

                {/* Add Button */}
                <Button variant="primary" type="submit">Add</Button>

            </Form.Group>
        </Form>
    )
}

export default InputForm;