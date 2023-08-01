import React from 'react';
import './TaskCard.css';

interface TaskCard1 {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard = (props: TaskCard1) => {
  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.dueDate && <p>Due on: {props.dueDate}</p>}
      {props.completedAtDate && <p>Completed on: {props.completedAtDate}</p>}
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
