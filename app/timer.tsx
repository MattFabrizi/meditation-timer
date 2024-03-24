"use client";
import React, { useState, useEffect } from "react";

export default function Timer({ isRunning }: { isRunning: boolean }) {
  const [time, setTime] = useState(1000);
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    if (isRunning && time > 0) {
      // setting time from n to 0 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time - 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  return (
    <div className="stopwatch-time flex-auto text-center text-[20vw] font-extrabold leading-none">
      {getTimer(time)}
      {/* <input type="number" defaultValue={0} />:<input type="number" /> */}
    </div>
  );
}

function getTimer(time: number) {
  // Hours calculation
  // const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  // const milliseconds = time % 100;

  return (
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0")
  );
}
