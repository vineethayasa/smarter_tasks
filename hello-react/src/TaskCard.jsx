import React from 'react';
import './TaskCard.css';

const TaskCard = (props) => {
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
