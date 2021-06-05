import React from 'react';
import Task from "./Task";
    const Tasks = ({tasks, handTaskClick,handleTaskDeletion}) =>{
       return(
        <>
        {tasks.map((task) => (
            <Task task={task} handTaskClick={handTaskClick}
            handleTaskDeletion={handleTaskDeletion}/>
            ))}
        </>
       );
    };

    export default Tasks;