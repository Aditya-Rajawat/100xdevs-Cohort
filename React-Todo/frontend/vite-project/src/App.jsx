import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [mainTask, setMainTask] = useState([]);

  const handleClick = () => {
    setMainTask(...mainTask);
    setMainTask(title + " " + desc);
    console.log(mainTask)
  };

  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center m-6">
        <span className="text-3xl font-semibold hover:underline hover:cursor-pointer">
          Todo App
        </span>

        <div className="flex gap-5">
          <input
            className="focus:outline-double p-4 bg-gray-200 rounded-lg"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            className="focus:outline-double p-4 bg-gray-200 rounded-lg"
            type="text"
            placeholder="Enter description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-green-400 p-4 rounded-full text-white font-semibold hover:drop-shadow-xl"
          onClick={handleClick}
        >
          Add Task
        </button>

        <div className="w-full p-6 bg-slate-200 flex justify-between">
          <ul>
            <li>{mainTask}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
