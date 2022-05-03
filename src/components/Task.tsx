import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

interface Props {
  task: any;
  style: React.CSSProperties | undefined;
}

const Task: React.FC<Props> = ({ task, style }) => {
  const { addTask } = useContext(GlobalContext);

  return (
    <p
      style={style}
      onClick={() => {
        addTask(task);
      }}
    >
      {task.name}
    </p>
  );
};

export default Task;
