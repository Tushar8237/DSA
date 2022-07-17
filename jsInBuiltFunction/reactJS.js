import React, { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };
  const counters = () => {
    if (count === 0) return count;
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={counter}>click me +1</button>
      <button onClick={counters}>click me -1</button>
    </div>
  );
};

export default Component;
