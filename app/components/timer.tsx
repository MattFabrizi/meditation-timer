"use client";
import React, { useState, useEffect } from "react";
import TimeInput from "./timeInput";

export default function Timer({ isRunning }: { isRunning: boolean }) {
  const [minutes, setMinutes] = useState(-1);
  const [seconds, setSeconds] = useState(-1);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    if (isRunning && (minutes > 0 || seconds > 0)) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            return;
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const inputStyle =
    "w-full min-w-[2ch] appearance-none border-none bg-transparent focus:outline-none";

  return (
    <div className="stopwatch-time flex flex-nowrap items-center justify-center text-big-clamp leading-none text-primary">
      <TimeInput
        isRunning={isRunning}
        time={minutes}
        setTime={setMinutes}
        twStyle={inputStyle + " text-right"}
      />
      <span className="mx-4 text-small-clamp text-secondary">:</span>
      <TimeInput
        isRunning={isRunning}
        time={seconds}
        setTime={setSeconds}
        twStyle={inputStyle}
      />
    </div>
  );
}
