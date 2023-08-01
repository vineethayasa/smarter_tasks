import React from 'react';
import './TaskCard.css';

interface TaskCard1 {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
  flag: 'p' | 'd';
}

const TaskCard = (props: TaskCard1) => {
  const { flag } = props;

  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      {flag === 'p' ? (
        <p>Due on: {props.dueDate}</p>
      ) : flag === 'd' && (
        <p>Completed on: {props.completedAtDate}</p>
      )}
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
