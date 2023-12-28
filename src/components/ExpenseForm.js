import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Items from './Items';
import { CSVLink } from 'react-csv';
import classes from './ExpenseForm.module.css'

const ExpenseForm = (props) => {
    const amountInputRef = useRef();
    const descriptionInputRef = useRef();
    const categoryInputRef = useRef();
    const [items, setItems] = useState([]);
    const submitHandler = async(event) => {
        event.preventDefault();
        const data = {
            amount: amountInputRef.current.value,
            description: descriptionInputRef.current.value, 
            category: categoryInputRef.current.value,
        }
        try {
            const response = await axios.post(`https://track-expense-4f458-default-rtdb.firebaseio.com/Expenses${props.email}.json`,data)
            console.log(response.data);
            fetchItemsHandler();
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const updateHandler = async(number) => {
        const data = {
            amount: amountInputRef.current.value,
            description: descriptionInputRef.current.value, 
            category: categoryInputRef.current.value,
        }

        try {
            const response = await axios.put(`https://track-expense-4f458-default-rtdb.firebaseio.com/Expenses${props.email}/${number}.json`,data)
            console.log(response.data);
            fetchItemsHandler();
        }
        catch (err) {
            console.log(err.message)
        }
    }
    const fetchItemsHandler = useCallback(async() => {
        try {
            const response = await fetch(`https://track-expense-4f458-default-rtdb.firebaseio.com/Expenses${props.email}.json`)
            if(!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            const loadedItems = [];
            for (const key in data) {
                loadedItems.push({
                id: key,
                amount: data[key].amount,
                description: data[key].description,
                category: data[key].category,
                })
            }
            setItems(loadedItems);
        }
        catch (error) {
            console.log(error.message);
        }
    }, [])
    useEffect(() => {
        fetchItemsHandler()
    }, [fetchItemsHandler]);

    let content = <p></p>;

    if (items.length > 0){
        content = items.map((data) => (
            <Items 
                key={data.id}
                id={data.id}
                amount={data.amount}
                description={data.description}
                category={data.category}
                ids={updateHandler}
                fetch={fetchItemsHandler}
                email={props.email}
            >
                {props.children}
            </Items>
        ))
    }
    const headers = [
        {
            label: "Amount" , key: "amount"
        },
        {
            label: "Description" , key: "description"
        },
        {
            label: "Category" , key: "category"
        },
    ]
    const csvLink = {
        filename: "file.csv",
        headers: headers,
        data: items,
    }
  return (
    <section>
        <form onSubmit={submitHandler}>
            <div className={classes.div}><label>Amount</label>
            <input type='number' ref={amountInputRef} required /></div>
            <div className={classes.div}><label>Description</label>
            <input type='text' ref={descriptionInputRef} required /></div>
            <div className={classes.div}><label>Category</label>
                <select ref={categoryInputRef} required >
                    <option>Food</option>
                    <option>Fuel</option>
                    <option>Salary</option>
                </select></div>
            <button>Add</button>
        </form>
        <CSVLink {...csvLink}><button>Download</button></CSVLink>
        {content}
    </section>
  )
}

export default ExpenseForm