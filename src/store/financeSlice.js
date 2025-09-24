import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  incomeMonth: 0,
  expenseMonth: 0,
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.balance += action.payload;
      state.incomeMonth += action.payload;
    },
    addExpense: (state, action) => {
      state.balance -= action.payload;
      state.expenseMonth -= action.payload;
    },
  },
});

export const { addIncome, addExpense } = financeSlice.actions;

export default financeSlice.reducer;
