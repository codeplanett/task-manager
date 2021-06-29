import { useState } from "react"


function AddTask({ onAdd }){
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert("Please set a task")
            return
        }

        onAdd({ text, day, reminder })
        setText("")
        setDay("")
        setReminder(false)
    }

    return (
       <form className = "add-form" onSubmit={onSubmit}>
           <div className = "form-control">
               <label>Task</label>
               <input type = "text" placeholder = "Add Task.." value = {text} onChange = {(e) => setText(e.target.value)}/>
           </div>
           <div className = "form-control">
               <label>Day & Time</label>
               <input type = "text" placeholder = "Add Day.." value = {day} onChange = {(e) => setDay(e.target.value)}/>
           </div>
           <div className = "form-control form-control-check">
               <label>Set Reminder</label>
               <input checked = {reminder} type = "checkbox" placeholder = "Set Reminder.." value = {reminder} onChange = {(e) => setReminder(e.target.value)}/>
           </div>
           <input type = "submit" value = "Save task" className = "btn btn-block"/>
       </form>
    )
}

export default AddTask