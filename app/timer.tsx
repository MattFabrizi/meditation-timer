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
    <div className="stopwatch-time text-big-clamp flex flex-nowrap items-center justify-center leading-none text-primary">
      <input
        type="text"
        pattern="[0-9]*"
        inputMode="numeric"
        value={String(minutes).padStart(2, "0")}
        onChange={(e) =>
          setMinutes(Math.min(parseInt(e.target.value) || 0, 90))
        }
        placeholder="00"
        disabled={isRunning}
        className="appearance-none border-none bg-transparent text-right focus:outline-none"
        style={{ width: "100%", minWidth: "2ch" }}
      />
      <span className="text-small-clamp text-secondary">:</span>
      <input
        type="text"
        pattern="[0-9]*"
        inputMode="numeric"
        value={String(seconds).padStart(2, "0")}
        onChange={(e) =>
          setSeconds(Math.min(parseInt(e.target.value) || 0, 60))
        }
        placeholder="00"
        disabled={isRunning}
        className="appearance-none border-none bg-transparent text-left focus:outline-none"
        style={{ width: "100%", minWidth: "2ch" }}
      />
    </div>
  );
}
