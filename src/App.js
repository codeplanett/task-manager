import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from "react"
import AddTask from './components/AddTask';

function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState( [] )

  useEffect(() =>{
    const fetching = async() => {
      let res = await fetch("http://localhost:5000/tasks")
      let data = await res.json()
      console.log(data)
    }

    fetching()
  }, [])

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
      {tasks ? (<Tasks   tasks = {tasks}  onDelete = {deleteTask}  onToggle = {toggleReminder}   />) : "No tasks were defined"}
    </div>
  );
}

export default App;
