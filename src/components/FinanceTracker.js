import React, { useState } from 'react';

const FinanceTracker = () => {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [balance, setBalance] = useState(0);

    const calculateBalance = () => setBalance(income - expenses);

    return (
        <div className="finance-container">
            <h1>AI Finance Tracker</h1>
            <label>
                Income:
                <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} />
            </label>
            <label>
                Expenses:
                <input type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} />
            </label>
            <button onClick={calculateBalance}>Calculate Balance</button>
            <p>Balance: ${balance}</p>
        </div>
    );
};

export default FinanceTracker;