import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateArea from "./Components/CreateArea";
import Expense from "./Components/Expense";
const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (dataObj) => {
    setExpenses((prevExpenses) => {
      return [dataObj, ...prevExpenses];
    });
  };

  return (
    <div>
      <CreateArea onAdd={addExpenseHandler} />

      <main className="expenses">
        {expenses.length <= 0 ? (
          <h2>No Expenses Found</h2>
        ) : (
          expenses.map((expenseObj, index) => {
            return (
              <Expense name={expenseObj.name} amount={expenseObj.amount} />
            );
          })
        )}
      </main>
    </div>
  );
};

export default App;
