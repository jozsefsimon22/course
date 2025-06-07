import './NewGoal.css'
import { useState } from 'react';

function NewGoal(props){

    const [enteredText, setEnteredText] = useState('');

    function addGoalHandler(event){
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        }

        props.onAddGoal(newGoal)
        setEnteredText('')

    }

    function textChangeHandler(event){
        setEnteredText(event.target.value)
    }

    return(
        <form className='new-goal' onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler}/>
            <button type="submit">Add New Goal</button>
        </form>
    )
}

export default NewGoal;