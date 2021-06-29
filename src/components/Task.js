import { FaTimes } from "react-icons/fa"
import { FaCalendarCheck } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className = "task" onDoubleClick = {() => onToggle(task.id)}>
            <h1>
                {task.text} 
                {task.reminder === true ? (<FaCalendarCheck />) : ""}
                <FaTimes 
                style = {faTimesStyle}
                 onClick = {() => onDelete(task.id)} 
                />
            </h1>
        </div>
    )
}

const faTimesStyle = {
    color : "red",
    cursor : "pointer"
}

export default Task;