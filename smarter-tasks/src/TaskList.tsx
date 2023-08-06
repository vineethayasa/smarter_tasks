/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (index: number) => void;
}

// interface State {}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li>
      <Task
      key={idx}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      deleteTask={props.deleteTask}
    />
    </li>
  ));
  return <><ul>{list}</ul></>;
};

export default TaskList;
