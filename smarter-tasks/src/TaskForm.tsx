import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  date: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask: TaskItem = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", date: "" });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };

  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ date: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.addTask}>
        <label htmlFor="todoTitle">Title</label>
        <input
          type="text"
          value={this.state.title}
          id="todoTitle"
          onChange={this.titleChanged}
          required
          className="border rounded px-2 mb-4 ml-2"
        />

        <br />
        <label htmlFor="todoDescription">Description</label>
        <input
          type="text"
          value={this.state.description}
          id="todoDescription"
          onChange={this.descriptionChanged}
          className="border rounded px-2 mb-4 ml-2"
        />

        <br />
        <label htmlFor="todoDueDate">Date</label>
        <input
          type="date"
          value={this.state.date}
          id="todoDueDate"
          onChange={this.dateChanged}
          required
          className="border rounded px-2 mb-4 ml-2"
        />

        <br />

        <button type="submit" id="addTaskButton">
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
