import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionalList";

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
    </div>
  );
}

export default App;
