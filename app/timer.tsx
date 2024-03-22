"use client";
import React, { useState, useEffect } from "react";

export default function Timer() {
  // state to store time
  const [time, setTime] = useState(500);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    if (isRunning && time > 0) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time - 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  // const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  // const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(500);
  };
  return (
    <div className="stopwatch-container mx-auto max-w-[65vw] rounded-2xl border border-solid border-white bg-white bg-opacity-20 p-16 text-teal-300 backdrop-blur-md">
      <span className="stopwatch-time block text-[18em] font-extrabold leading-none md:text-[12em]">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </span>
      <label htmlFor="duration" className="sr-only">
        Set time
      </label>
      <input id="duration" type="range" step={30} min={30} max={7200} />
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
