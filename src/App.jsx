import react, { useEffect, useState } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router , Route} from 'react-router-dom'

import Header from "./components/Header";
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import TaskDetails from './components/TaskDetails';

import './App.css';



const App = () => {
  // let messege ="hello word"
  const [tasks, setTasks] = useState([
    {
      id:"1",
      title:"estudar programaçao",
      completed:false,
  },
  {
    id:"2",
    title:"ler livros",
    completed:true,
  },
  ]);
 

  const handTaskClick = (taskId) => {
     const newTask = tasks.map((task) =>{
       if(task.id === taskId) return{... task, completed:!task.completed}
       return task;
     });
     setTasks(newTask);
  }

  const handleTaskAddition = (taskTitle) =>{
      const newTask = [...tasks,{
        title:taskTitle,
        id:uuidv4(),
        completed:false,
      },
    ];
      setTasks(newTask);
  };

  const handleTaskDeletion = (taskId) =>{
    const newTask = tasks.filter((task) => task.id != taskId);
    setTasks(newTask)
  };
  return(
    <Router>
      <div className="container">
     <Header/>
     <Route path="/" exact render={() => (
       <>
        
      <AddTask handleTaskAddition = {handleTaskAddition} />
      <Tasks tasks={tasks} handTaskClick={handTaskClick}
     handleTaskDeletion={handleTaskDeletion}/>
    
    
       </>
     )}/>

      <Route path="/:taskTitle" exact component={TaskDetails}/>

     </div>
    </Router>
  )
}
  export default App;