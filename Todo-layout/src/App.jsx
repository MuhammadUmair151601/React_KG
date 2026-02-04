import React from "react";

const App = () => {
  return (
    <div>
      <center>
        <h1 className="text-4xl font-bold py-5 mr-30">TODO App</h1>
        <div className="grid grid-cols-3 gap-5 w-[500px]">
          <input
            className="border-2 border-gray-400 focus:outline-none px-1"
            type="text"
            placeholder="Enter todo here"
          />
          <input
            className="border-2 border-gray-400 focus:outline-none px-1"
            type="date"
          />
          <button
            className="border w-20 bg-green-500 rounded-[5px] h-10 text-white font-bold"
            type="submit"
          >
            Add
          </button>
        </div>
         <div className="grid grid-cols-3 gap-5 w-[500px] mt-5">
         <p className="flex">Buy milk</p>
         <p className="flex">4/10/2023</p>
          <button
            className="border w-20 bg-red-500 rounded-[5px] h-10 text-white font-bold"
            type="submit"
          >
            Delete
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5 w-[500px] mt-5">
         <p className="flex">Go to college</p>
         <p className="flex">4/10/2034</p>
          <button
            className="border w-20 bg-red-500 rounded-[5px] h-10 text-white font-bold"
            type="submit"
          >
            Delete
          </button>
        </div>
      </center>
    </div>
  );
};

export default App;
