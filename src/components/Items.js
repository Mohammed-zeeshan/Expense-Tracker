import axios from 'axios';
import classes from './Items.module.css'

const Items = (props) => {
    const deleteHandler = async(event) => {
        event.preventDefault();
        try {
            await axios.delete(`https://track-expense-4f458-default-rtdb.firebaseio.com/Expenses${props.email}/${props.id}.json`)
            console.log('Expense successfully deleted')
            props.fetch();
        }
        catch (err) {
            console.log(err.message);
        }
    }
    const updateHandler = async(event) => {
        event.preventDefault();
        props.ids(props.id);
    }
  return (
    <div>
        <div key={props.id} className={classes.container}>
            <div style={{padding: 5}}><label className={classes.text}>{props.amount} - {props.description} - {props.category}</label></div>
            <div style={{padding: 5}}><button className={classes.itemsbtn} onClick={deleteHandler}>Delete</button></div>
            <div style={{padding: 5}}><button className={classes.itemsbtn} onClick={updateHandler}>Edit</button></div>
        </div>
    </div>
  )
}

export default Items;