"use client";
import { useState } from "react";
import Timer from "./timer";
import Controls from "./timerControls";

export default function StopwatchApp() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div
      className="stopwatch-container mx-auto box-border flex max-w-[65vw] flex-col content-center justify-center
                rounded-2xl border border-solid border-white 
                bg-white bg-opacity-20 p-16 backdrop-blur-md"
    >
      <Timer isRunning={isRunning} />
      <Controls isRunning={isRunning} setIsRunning={setIsRunning} />
    </div>
  );
}
