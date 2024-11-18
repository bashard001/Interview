import React, { useState } from 'react';

function Timer() {
    const [time, setTime] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const handleButtonClick = () => {
        // TODO: Focus on the input element when the button is clicked
        //Modify the InputFocus component so that clicking the button focuses the text input.
    };



  return (
    <div>
     <h2>Timer</h2>
     {/* The should go up by 1 every second when play is clicked and pause when pause is clicked */}
      <h3>{time}</h3>
      <button>subtract 10</button>
      <button>add 10</button>
      <button>pause</button>
      <button>Play</button>
      <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    </div>
  );
}

export default Timer;