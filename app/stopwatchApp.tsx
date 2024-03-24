"use client";
import { useState } from "react";
import Timer from "./timer";
import Controls from "./timerControls";

export default function StopwatchApp() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div
      className="stopwatch-container mx-auto box-border flex w-[900px] max-w-[65vw] flex-col flex-nowrap content-center justify-center
                rounded-2xl border border-solid border-white 
                bg-white bg-opacity-20 p-16 text-teal-500 backdrop-blur-md"
    >
      <Timer isRunning={isRunning} />
      <Controls isRunning={isRunning} setIsRunning={setIsRunning} />
    </div>
  );
}
