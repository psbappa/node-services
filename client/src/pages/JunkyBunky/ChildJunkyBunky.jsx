import React, { useState } from "react";

export default function ChildJunkyBunky({
  messageProps,
  updateMessage,
  updateTextHandler,
  sendDataToParent
}) {
  
    const [inputValue, setInputValue] = useState('');

  const handlePropsUpdate = () => {
    updateMessage("Hello from Child!");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {/* <button style={{pointer: 'cursor'}} onClick={() => updateMessage("Hello from Child!")}> */}
      <h3 style={{ fontSize: "20px" }}>Child</h3>
      <span>Message from parent as a props: {messageProps}</span>
      <button
        onClick={() => updateTextHandler("Update from Child!...")}
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Update this props:
      </button>
      <br></br>
      {/* Pass this input text value to parent */}
      {/* <input
        type="text"
        value={data}
        onChange={handleChange}
        placeholder="input type..."
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
      />
      Entered Value is: {data} */}

    <input
        type="text"
        value={inputValue}      // controlled by state
        onChange={handleChange} // updates state on input
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p> 
      <button onClick={() => sendDataToParent(inputValue)} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Passed this {inputValue} to parent</button>   
    </div>
  );
}
