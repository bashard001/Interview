import React, { useState } from 'react';

function Timer() {
    const [time, setTime] = useState(0);



  return (
    <div>
     <h2>Timer</h2>
     {/* The should go up by 1 every second when play is clicked and pause when pause is clicked */}
      <h3>{time}</h3>
      <button>subtract 10</button>
      <button>add 10</button>
      <button>pause</button>
      <button>Play</button>
    </div>
  );
}

export default Timer;