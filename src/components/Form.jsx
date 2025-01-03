import Button from './Button'
import styles from './Form.module.css'
import React, { useState } from 'react'

export default function Form() {
    const [routine, setRoutine] = useState({})
    //form input handling
        function handleFrequencySelection(event){
            setRoutine({...routine, frequency:parseInt(event.target.value)})
        }
        function handleDateAndTime(){

        }
    //form submission and error handling


  return (
    <form action="" className={styles.form}>
        <div>
            <label htmlFor="routine">What activity do you want to track?</label>
            <input type="text" placeholder='eg. Reading, exercise, gaming' onChange={(e)=>setRoutine({...routine, activity:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="frequency">How many days in the week do you want to do this?</label>
            <div className={styles.radio_grp}>
                <input type="radio" name="frequency" value={1} data-text="1" onChange={(e)=>handleFrequencySelection(e)}/>
                <input type="radio" name="frequency" value={2} data-text="2" onChange={(e)=>handleFrequencySelection(e)}/>
                <input type="radio" name="frequency" value={3} data-text="3" onChange={(e)=>handleFrequencySelection(e)}/>
                <input type="radio" name="frequency" value={4} data-text="4" onChange={(e)=>handleFrequencySelection(e)}/>
                <input type="radio" name="frequency" value={5} data-text="5" onChange={(e)=>handleFrequencySelection(e)}/>
                <input type="radio" name="frequency" value={6} data-text="6" onChange={(e)=>handleFrequencySelection(e)}/>
                <input type="radio" name="frequency" value={7} data-text="7" onChange={(e)=>handleFrequencySelection(e)}/>
            </div>
        </div>
        <div>
            <label htmlFor="start-date">What time during the day will you seperate for your routine?</label>
            <input type="datetime-local" id='start-date' />
        </div>
        <div className={styles.btn_grp}>
            <Button disabled>
                Add Routine
            </Button>
        </div>
    </form>
  )
}
