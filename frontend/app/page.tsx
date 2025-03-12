"use client";  // Ensure client-side rendering

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 sm:p-20 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Task Management App</h1>

      {/* Task Input */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
          className="px-4 py-2 border rounded-lg shadow-sm"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks added yet.</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="py-2 border-b last:border-none">
              {task}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
