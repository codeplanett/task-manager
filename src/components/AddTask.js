import { useState } from "react"


function AddTask(){
    const [text, setText] = useState("")
    
    return (
       <form className = "add-form">
           <div className = "form-control">
               <label>Task</label>
               <input type = "text" placeholder = "Add Task.." />
           </div>
           <div className = "form-control">
               <label>Day & Time</label>
               <input type = "text" placeholder = "Add Day.." />
           </div>
           <div className = "form-control form-control-check">
               <label>Set Reminder</label>
               <input type = "checkbox" placeholder = "Set Reminder.." />
           </div>

           <input type = "submit" value = "Save" className = "btn btn-block"/>
       </form>
    )
}

export default AddTask