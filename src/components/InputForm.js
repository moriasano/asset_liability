import React, { useState } from 'react';
import '../App.css';

function InputForm() {
    const [type, setType] = useState(0);
    const [name, setName] = useState("Name...");
    const [balance, setBalance] = useState("0.00");

    return (
        <form>
            {/* Type */}
            <label>
                Type:
                <select value={type} onChange={e => setType(e.target.value)} >
                    <option value="asset">Asset</option>
                    <option value="liability">Liability</option>
                </select>
            </label>

            {/* Name */}
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>

            {/* Balance */}
            <label>
                Balance:
                <input type="number" value={balance} onChange={e => setBalance(e.target.value)} step="0.01" />
            </label>
        </form>
    )
}

export default InputForm;