import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addIncome, addExpense } from '@/store/financeSlice.js';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { balance, incomeMonth, expenseMonth } = useSelector(
    state => state.finance
  );
  const [amount, setAmount] = useState('');

  const handleIncome = () => {
    if (amount) {
      dispatch(addIncome(Number(amount)));
      setAmount('');
    }
  };

  const handleExpense = () => {
    if (amount) {
      dispatch(addExpense(Number(amount)));
      setAmount('');
    }
  };

  return (
    <div>
      <div>
        <p>Баланс: {balance}</p>
        <p>Доход за месяц: {incomeMonth}</p>
        <p>Расход за месяц: {expenseMonth}</p>
      </div>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Введите сумму"
      />
      <button onClick={handleIncome}>Добавить доход</button>
      <button onClick={handleExpense}>Добавить расход</button>
    </div>
  );
};
