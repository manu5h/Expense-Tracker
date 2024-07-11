import React, { createContext, useState, ReactNode } from 'react';

interface Expense {
  name: string;
  amount: number;
  date: Date;
}

interface ExpenseContextType {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [expenses, setExpenses] = useState<Expense[]>([]); 

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
