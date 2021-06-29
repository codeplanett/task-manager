import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';

function App() {
  const [showAdd, setShowAdd] = useState(true)
  const [tasks, setTasks] = useState( [
    {
      text : "hello",
      id : 1,
      reminder : false,
      date : new Date()
    },
    {
       text : "world",
       id : 2,
       reminder : false,
       date  : new Date()
    }
])

const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
   setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAdd(!showAdd)}/>
      {showAdd ? (<AddTask onAdd = {addTask} />) : ""}
      <Tasks 
      tasks = {tasks} 
      onDelete = {deleteTask}
      onToggle = {toggleReminder}
       />
    </div>
  );
}

export default App;
