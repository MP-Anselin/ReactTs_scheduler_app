import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

interface Props {
    task: any;
    style: any;
}


const Task: React.FC<Props> = ({task, style}) => {

    const {setTask} = useContext(GlobalContext);

    return (
        <p style={style} onClick={()=> {setTask(task)}}>{task.name}</p>
    )
}

export default Task
