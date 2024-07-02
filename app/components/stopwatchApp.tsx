"use client";
import { useState } from "react";
import Timer from "./timer";
import Controls from "./timerControls";
import Settings from "./settings";

export default function StopwatchApp() {
  const [isRunning, setIsRunning] = useState(false);
  const [intervallo, setIntervallo] = useState(-1);
  const [isIntervalloChecked, setIsIntervalloChecked] = useState(false);

  return (
    <div className="wrapper mx-auto box-border max-w-6xl text-center">
      <div
        className="stopwatch-container relative z-10 flex-col content-center justify-center
                rounded-2xl border border-solid border-white
                bg-white bg-opacity-20 p-8 backdrop-blur-md"
      >
        <Timer
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          intervallo={intervallo}
          isIntervalloChecked={isIntervalloChecked}
        />
        <Controls isRunning={isRunning} setIsRunning={setIsRunning} />
      </div>
      <Settings
        isRunning={isRunning}
        setIntervallo={setIntervallo}
        isIntervalloChecked={isIntervalloChecked}
        setIsIntervalloChecked={setIsIntervalloChecked}
      />
    </div>
  );
}
