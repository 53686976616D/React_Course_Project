import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');
  // const [filterInfoText, setFilterInfoText] = useState(
  //   '2019, 2021, 2022 & 2023'
  // );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    // if (selectedYear === '2019') {
    //   setFilterInfoText('2020, 2021, 2022 & 2023');
    // } else if (selectedYear === '2020') {
    //   setFilterInfoText('2019, 2021, 2022 & 2023');
    // } else if (selectedYear === '2021') {
    //   setFilterInfoText('2019, 2020, 2022 & 2023');
    // } else if (selectedYear === '2022') {
    //   setFilterInfoText('2019, 2020, 2021 & 2023');
    // } else {
    //   setFilterInfoText('2019, 2020, 2021 & 2022');
    // }
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangefilter={filterChangeHandler}
        />
        {/* <p>Data for years {filterInfoText} is hidden.</p> */}
        {/* ? and : is if-else statement */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
