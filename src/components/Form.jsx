import { useAppContext } from '../contexts/AppContext'
import Button from './Button'
import styles from './Form.module.css'
import React, { useState } from 'react'

function dateFormating(input){
    const date = new Date(input.target.value);
    const formattedDate = date.toLocaleDateString('en-US', {month: 'long', day:'numeric', year:'numeric'});
    return formattedDate;
}
function timeFormating(input){
    const timeValue = input.target.value;
    const [hour, minute] = timeValue.split(":");
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    const formattedTime = date.toLocaleTimeString('en-US', {
        hour:"numeric",
        minute: "numeric",
        hour12: true
    });
    return formattedTime;
    
    // setRoutine({...routine, time:date.toLocaleString('en-US', {hour:'2-digit', minute:'2-digit', second:'2-digit'})})
}

export default function Form() {
    const {dispatch} = useAppContext();
    const newRoutine = {
        routine: "",
        frequency: "",
        duration:"",
        time: null,
        startDate: null
    }
    const [routine, setRoutine] = useState(newRoutine);
    const SelectDuration = (e) => setRoutine({...routine, duration:e.target.value.toLowerCase()})
    const SelectFrequency = (e) => setRoutine({...routine, frequency:parseInt(e.target.value)})

    function AddRoutineHandler(){
        dispatch({type:"addRoutine", payload:routine});
        setRoutine(newRoutine)
    }


  return (
    <form action="" className={styles.form}>
        <div>
            <label htmlFor="routine">What activity do you want to track?</label>
            <input type="text" placeholder='eg. Reading, exercise, gaming' value={routine.routine} onChange={(e)=>{
                setRoutine({...routine, routine: e.target.value})
            }}/>
        </div>
        <div>
            <label htmlFor="time">What time during the day will you seperate for your routine?</label>
            <input type="time" id='time' onChange={(e)=>{
                setRoutine({...routine, time:timeFormating(e)})
            }}/>
        </div>
        <div>
            <label htmlFor="frequency">How many days in the week do you want to do this?</label>
            <div className={styles.radio_grp}>
                <input type="radio" name="frequency" value={7} data-text="Daily" onChange={(e)=>SelectFrequency(e)}/>
                <input type="radio" name="frequency" value={1} data-text="1 day" onChange={(e)=>SelectFrequency(e)}/>
                <input type="radio" name="frequency" value={2} data-text="2 days" onChange={(e)=>SelectFrequency(e)}/>
                <input type="radio" name="frequency" value={3} data-text="3 days" onChange={(e)=>SelectFrequency(e)}/>
                <input type="radio" name="frequency" value={4} data-text="4 days" onChange={(e)=>SelectFrequency(e)}/>
                <input type="radio" name="frequency" value={5} data-text="5 days" onChange={(e)=>SelectFrequency(e)}/>
                <input type="radio" name="frequency" value={6} data-text="6 days" onChange={(e)=>SelectFrequency(e)}/>
            </div>
        </div>
        <div>
            <label htmlFor="duration">Will the routine have a lifespan?</label>
            <div className={styles.radio_grp}>
                <input type="radio" name="option" id="yes" value="Yes" data-text="Yes" onChange={(e)=>SelectDuration(e)}/>
                <input type="radio" name="option" id="no" value="No" data-text="No" onChange={(e)=>SelectDuration(e)}/>
            </div>
        </div>
        <div>
            <label htmlFor="start-date">When do you want to start this routine?</label>
            <input type="date" id="start-date" placeholder="" onChange={(e)=>{
                setRoutine({...routine, startDate:dateFormating(e)})
            }}/>
        </div>
        <div className={`${routine.duration === "yes" ? styles.enabled: styles.disabled}`}>
            <label htmlFor="stop-date" >When do you want to stop this routine?</label>
            <input type="date" id="stop-date" placeholder="" onChange={(e)=>{
                setRoutine({...routine, stopDate: dateFormating(e)})
            }}/>
        </div>
        <div className={styles.btn_grp}>
            <Button onClick = {AddRoutineHandler}>
                Add Routine
            </Button>
        </div>
    </form>
  )
}
