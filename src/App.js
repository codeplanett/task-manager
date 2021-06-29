import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState( [
    {
      text : "hello",
      id : 1,
      reminder : false
    },
    {
       text : "world",
       id : 2,
       reminder : false
    }
])

const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
   setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
}

  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks 
      tasks = {tasks} 
      onDelete = {deleteTask}
      onToggle = {toggleReminder}
       />
    </div>
  );
}

export default App;
