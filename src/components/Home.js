import React from 'react'
import classes from './Home.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ExpenseForm from './ExpenseForm';

const Home = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <label>Welcome to Expense Tracker!!!</label>
        <div>
          <label className={classes.label}>Your Profile is incomplete </label>
          <Link to='/Profile'>Complete now</Link>
        </div>
    </header>
    <ExpenseForm email={props.email} />
    </div>
  )
}

export default Home;