import React from "react";

const Button = ({ handleStart, status, handleStop, handleReset }) => {
  return (
    <div>
      {status === 0 ? (
        <button
          className="stopwatch-btn stopwatch-btn-gre"
          onClick={handleStart}
        >
          Start
        </button>
      ) : (
        " "
      )}

      {status === 1 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-red"
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      ) : (
        " "
      )}

      {status === 2 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-gre"
            onClick={handleStart}
          >
            Resume
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Button;
