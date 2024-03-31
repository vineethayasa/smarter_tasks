# Smarter Tasks


Smarter Tasks is a streamlined task management application designed to effortlessly organize and monitor projects and tasks. With its intuitive interface, it simplifies the process of organizing projects, assigning tasks, and fostering collaboration among team members. Whether tackling personal projects or coordinating with a team, Smarter Tasks offers the necessary functionalities to ensure efficiency and productivity.

Explore the live demo of the project [here](https://precious-cobbler-a0634b.netlify.app/signin).

## Features

### Sign Up & Sign In

- Users can sign up for an account by providing details such as Organization Name, Name, Email, and Password.
- Upon signing in, users are redirected to the dashboard, where they can access project details and manage tasks.

![Signup](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/signup.png)

![Login](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/login.png)

### Dashboard Navigation

- **Projects Tab:** Users can view and manage projects, including their tasks, in this section.
- **Members Tab:** Users can manage organization members, including adding new members and deleting existing ones.
- **Dark Mode Toggle Button:** Allows users to switch between light and dark mode for better visibility.
- **Signout Option:** Allows users to sign out of their account.

![Dashboard](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/dashboard.png)

![Member](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/member.png)

![Dark Mode](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/dark.png)

### Project Management

- **Project View:** Users can view projects listed on the dashboard.

![Project View](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/dashboard.png)

- **Project Details Page:** Upon clicking on a project, users are redirected to a page displaying project details, including sections for pending, in progress, and done tasks.

![Project Details](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/project.png)

- **Task Management:** Tasks within each project are draggable, allowing users to move tasks between sections based on their status (pending, in progress, or done).
 
![Draggable Tasks](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/drag.png)

- **New Task Creation:** Users can create new tasks by clicking on the "New Task" button, which opens a popup/modal with a form to enter task details such as title, description, and due date.

![New Task](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/task.png)

- **Task Details:** Clicking on a task opens a popup/modal displaying task details, including title, description, due date, assignee, and comments.
- **Assign Task:** Users can assign tasks to specific team members by selecting a member from the dropdown list.
- **Add Comments:** Users can add comments regarding a task, facilitating collaboration and communication among team members.

![Task Details](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/taskdetails.png)

- **Delete Task:** Each task has a delete icon to remove it from the project.

### Members Management

- **Members List:** Users can view a list of members in the organization on the Members page.

![Members List](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/member.png)

- **New Member Creation:** Users can add new members to the organization by clicking on the "New Member" button, which opens a popup/modal to enter member details such as name, email, and password.

![New Member Creation](https://raw.githubusercontent.com/vineethayasa/screenshots/main/smarter_tasks/newmember.png)

- **Delete Member:** Users can delete members from the organization as needed.

## Installation

To install and run Smarter Tasks:

1. Clone the repository:
    ```bash
    git clone https://github.com/vineethayasa/smarter_tasks.git
    ```

2. Navigate into the project directory:
    ```bash
    cd smarter-tasks/smarter-tasks
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open web browser and visit [http://localhost:5173](http://localhost:5173) to access Smarter Tasks.

