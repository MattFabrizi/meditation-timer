"use client";
import { useState } from "react";
import Timer from "./timer";
import Controls from "./timerControls";

export default function StopwatchApp() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div
      className="stopwatch-container mx-auto box-border max-w-6xl flex-col content-center justify-center
                rounded-2xl border border-solid border-white 
                bg-white bg-opacity-20 p-8 backdrop-blur-md"
    >
      <Timer isRunning={isRunning} setIsRunning={setIsRunning} />
      <Controls isRunning={isRunning} setIsRunning={setIsRunning} />
    </div>
  );
}
