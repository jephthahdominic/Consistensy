import { useAppContext } from '../contexts/AppContext';
import Button from './Button'
import styles from './Form.module.css'
import React, { useState } from 'react'

const formData = {
    activity:"",
    frequency:null,
    startDate:null,
    dailyTime:null
}

export default function Form() {
    const {dispatch} = useAppContext()
    const [routine, setRoutine] = useState(formData);

    //form input handling
        function handleFrequencySelection(event){
            setRoutine({...routine, frequency:parseInt(event.target.value)})
        }

        function handleDateAndTime(){
            let date = new Date()
            let startDate = document.querySelector("input[type='date']");
            let dailyTime = document.querySelector("input[type='time']");
            if(startDate.value && dailyTime.value){
                const selectedDate = new Date(startDate.value);
                const [hours, minutes] = dailyTime.value.split(":");
                selectedDate.setHours(hours);
                selectedDate.setMinutes(minutes);

                if(selectedDate < date){
                    dispatch({type:"error", payload:"Invalid date"})
                    throw new Error("Invalid date")
                }else{
                    setRoutine({
                        ...routine, 
                        startDate:selectedDate.toLocaleDateString(), 
                        dailyTime:selectedDate.toLocaleTimeString()
                    });
                    console.log(routine)
                }
            }

        }
        
    //form submission and error handling

    function updateRoutine(){
        for(const key in routine){
            if(!routine[key]){
                dispatch({type:"error", payload:"Please fill all the fields"})
                throw new Error("Please fill all the fields")
            }
        }
        dispatch({type:"addRoutine", payload:routine})
    }


  return (
    <form action="" className={styles.form}>
        <div>
            <label htmlFor="routine">What activity do you want to track?</label>
            <input type="text" placeholder='eg. Reading, exercise, gaming' onChange={(e)=>setRoutine({...routine, activity:e.target.value.toUpperCase()})}/>
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
            <label htmlFor="start-date">Select a date to start your routine.</label>
            <input type="date" id='start-date' onChange={()=>handleDateAndTime()}/>
        </div>
        <div>
            <label htmlFor="daily-time">Select a time for your daily routine.</label>
            <input type="time" id='daily-time' onChange={()=>handleDateAndTime()}/>
        </div>
        <div className={styles.btn_grp}>
            <Button onClick={updateRoutine}>
                Add Routine
            </Button>
        </div>
    </form>
  )
}
