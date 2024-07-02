"use client";
import React, { useState, useEffect } from "react";
import TimeInput from "./timeInput";
import useSound from "use-sound";

export default function Timer({
  isRunning,
  setIsRunning,
  intervallo,
  isIntervalloChecked,
}: {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  intervallo: number;
  isIntervalloChecked: boolean;
}) {
  const [minutes, setMinutes] = useState(-1);
  const [seconds, setSeconds] = useState(-1);

  const bell1 = "/bell1.mp3";

  // const [customBell, setCustomBell] = useState<HTMLAudioElement | null>(
  //   typeof Audio !== "undefined" ? new Audio(bell1) : null,
  // );

  const [play] = useSound(bell1);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    if (isRunning) {
      if (minutes == -1) {
        setMinutes(0);
      }
      if (seconds == -1) {
        setSeconds(0);
      }
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes == 0) {
            //customBell?.play();
            play();
            setIsRunning(false);
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

  // Intervals
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    if (isRunning && isIntervalloChecked) {
      intervalId = setInterval(() => {
        //customBell?.play();
        play();
        console.log("playing");
      }, intervallo);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const inputStyle =
    "w-full min-w-[2ch] appearance-none border-none bg-transparent focus:outline-none";

  return (
    <div className="stopwatch-time flex flex-nowrap items-center justify-center text-big-clamp leading-none text-primary">
      <TimeInput
        isRunning={isRunning}
        time={minutes}
        maxTime={99}
        setTime={setMinutes}
        twStyle={inputStyle + " text-right"}
      />
      <span className="mx-4 text-small-clamp text-secondary">:</span>
      <TimeInput
        isRunning={isRunning}
        time={seconds}
        maxTime={59}
        setTime={setSeconds}
        twStyle={inputStyle}
      />
    </div>
  );
}
