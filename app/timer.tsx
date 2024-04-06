"use client";
import React, { useState, useEffect } from "react";

export default function Timer({ isRunning }: { isRunning: boolean }) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

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

  return (
    <div className="stopwatch-time flex flex-nowrap justify-center text-[20vw] font-extrabold leading-none">
      <input
        type="number"
        value={minutes.toString().padStart(2, "0")}
        onChange={(e) => setMinutes(parseInt(e.target.value))}
        disabled={isRunning}
        size={1}
        min={0}
        max={90}
        className="bg-transparent text-right focus:outline-none"
        style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
      />
      :
      <input
        type="number"
        value={seconds.toString().padStart(2, "0")}
        onChange={(e) => setSeconds(parseInt(e.target.value))}
        disabled={isRunning}
        size={1}
        min={0}
        max={60}
        className="bg-transparent focus:outline-none"
        style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
      />
    </div>
  );
}
