import React from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [inter, setInter] = useState();
  const [status, setStatus] = useState(0);
  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const handleRun = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const handleStart = () => {
    handleRun();
    setInter(setInterval(handleRun, 10));
    setStatus(1);
  };

  const handleStop = () => {
    clearInterval(inter);
    setStatus(2);
  };

  const handleReset = () => {
    clearInterval(inter);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Display time={time} />
          <Button
            status={status}
            handleStart={handleStart}
            handleStop={handleStop}
            handleReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
