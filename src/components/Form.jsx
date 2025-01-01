import { useAppContext } from '../contexts/AppContext'
import Button from './Button'
import styles from './Form.module.css'
import React, { useState } from 'react'

export default function Form() {
    const [enableDuration, setEnableDuration] = useState(false)
    const {state, dispatch} = useAppContext();
    const newRoutine = {
        routine: "",
        frequency: "",
        duration:"",
        startDate: null
    }
    const [routine, setRoutine] = useState(newRoutine);
    const SelectDuration = (e) => setRoutine({...routine, duration:e.target.value.toLowerCase()})
    // const radioButtons = document.querySelectorAll('input[type="radio"]');
    // // radioButtons.forEach((radio)=>{
    // //     radio.addEventListener("change", ()=>{
    // //         setRoutine({...routine, duration:radio.value.toLowerCase()})
    // //     })
    // // })
    function AddRoutineHandler(){
        alert('add routine')
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
            <label htmlFor="frequency">What is the frequency for this routine</label>
            <input type="text" id="frequency" placeholder='eg. 2, 3 days' onChange={(e)=>{
                setRoutine({...routine, frequency: e.target.value})
            }}/>
        </div>
        <div>
            <label htmlFor="duration">Will the routine have a lifespan?</label>
            <div className={styles.radio_grp}>
                <input type="radio" name="option" id="yes" value="Yes" data-text="Yes" onChange={(e)=>SelectDuration(e)}/>
                <input type="radio" name="option" id="no" value="No" data-text="No" onChange={(e)=>SelectDuration(e)}/>
            </div>
        </div>
        <div>
            <label htmlFor="start-date">When do you want to start?</label>
            <input type="date" id="start-date" placeholder="" onChange={(e)=>{
                setRoutine({...routine, startDate: e.target.value})
            }}/>
        </div>
        <div className={`${routine.duration === "yes" ? styles.enabled: styles.disabled}`}>
            <label htmlFor="stop-date" >When do you want to stop?</label>
            <input type="date" id="stop-date" placeholder="" onChange={(e)=>{
                setRoutine({...routine, startDate: e.target.value})
            }} disabled={!enableDuration ? true : false}/>
        </div>
        <div className={styles.btn_grp}>
            <Button onClick = {AddRoutineHandler}>
                Add Routine
            </Button>
        </div>
    </form>
  )
}
