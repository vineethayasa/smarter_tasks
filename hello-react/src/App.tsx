import React from 'react';
import TaskCard from './TaskCard';

function App() {
  return (
    <div className="grid grid-cols-7 mt-6">
      <div className="col-start-2 col-span-3">
        <h1 className="text-3xl font-bold">Smarter Tasks</h1>
        <h1 className="text-xl mt-2">Project: Graduation Final Year Project (Revamp College Website)</h1>
      </div>
      <div className="col-start-2 col-span-2 border border-black px-4 py-4 mt-6 rounded-lg mr-4 h-96">
        <div className="mt-2">
          <h1 className="text-2xl font-bold mb-4">Pending</h1>
          <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S" flag="p" />
          <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M" flag="p" />
          <div className="bg-gray-200 px-2 py-1 mt-4">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <p className="ml-2">New Task</p>
            </span>
          </div>
        </div>
      </div>
      <div className="col-start-4 ml-10 col-span-2 border border-black px-4 py-4 mt-6 rounded-lg h-96">
        <div className="mt-2">
          <h1 className="text-2xl font-bold mb-4">Done</h1>
          <TaskCard title="Design the Mockup" completedAtDate="10th April" assigneeName="Rohit M" flag="d" />
          <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S" flag="d" />
        </div>
      </div>
    </div>
  );
}

export default App;
