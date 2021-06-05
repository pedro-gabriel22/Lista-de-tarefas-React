import React from 'react'
import { useHistory, useParams } from 'react-router-dom' 
import "./TaskDetails.css"
import Button from './Button'

const TaskDetails = () => {
    
        const params = useParams();
        const history = useHistory();

        const handleBackButtonClick = () => {
            history.goBack();
        }
    
    return(
        <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{params.TaskTitle}</h2>
            <p>
            Inclua ícones populares em seus projetos React facilmente com react-icons, que utiliza importações ES6 que permitem incluir apenas os ícones que seu projeto está usando.
            </p>
        </div>
        </>
    )
}
export default TaskDetails;