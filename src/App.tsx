import "./App.css";
import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { set } from "zod";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [category, setCategory] = useState("All categories");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 2,
      description: "bbb",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      description: "ccc",
      amount: 10,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "aaa",
      amount: 10,
      category: "aaa",
    },
  ]);
  const visibleExpenses =
    category !== "All categories"
      ? expenses.filter((expenses) => expenses.category === category)
      : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>

      <ExpenseFilter
        onSelectCategory={(category) => {
          setCategory(category);
          console.log(category);
        }}
      ></ExpenseFilter>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((expense) => expense.id !== id));
        }}
      />
    </>
  );
}

export default App;
