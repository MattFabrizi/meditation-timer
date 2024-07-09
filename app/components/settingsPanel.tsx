import { useEffect, useState } from "react";
import TimeInput from "./timeInput";

const inputStyle =
  "max-w-[2ch] appearance-none border-none bg-slate-700/50 focus:outline-none text-white mr-1";

export default function SettingsPanel({
  showPanel,
  isRunning,
  setIntervallo,
  isIntervalloChecked,
  setIsIntervalloChecked,
}: {
  showPanel: boolean;
  isRunning: boolean;
  setIntervallo: React.Dispatch<React.SetStateAction<number>>;
  isIntervalloChecked: boolean;
  setIsIntervalloChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [intervalloMinutes, setIntervalloMinutes] = useState(0);
  const [intervalloSeconds, setIntervalloSeconds] = useState(10);

  useEffect(() => {
    setIntervallo(
      Math.max(
        (intervalloMinutes >= 0 ? intervalloMinutes * 60000 : 0) +
          (intervalloSeconds >= 0 ? intervalloSeconds * 1000 : 0),
        10000,
      ),
    );
  }, [intervalloMinutes, intervalloSeconds]);

  useEffect(() => {
    if (isRunning && intervalloSeconds < 10) {
      setIntervalloSeconds(10);
    }
  }, [isRunning]);

  return (
    <div
      className={`relative -top-10 z-0 mx-auto max-w-6xl rounded-b-2xl bg-slate-500/50 p-8 
                  transition delay-0 duration-300 ${showPanel ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 "}`}
    >
      <div className="pt-4">
        <input
          type="checkbox"
          className="mr-2"
          onClick={(e) => setIsIntervalloChecked(!isIntervalloChecked)}
          disabled={isRunning}
        />
        <h4 className="mr-2 inline text-white">SET INTERVAL :</h4>
        <TimeInput
          id="input-intervalMinutes"
          isRunning={isRunning}
          time={intervalloMinutes}
          maxTime={99}
          setTime={setIntervalloMinutes}
          twStyle={inputStyle}
        />
        <TimeInput
          id="input-intervalSeconds"
          isRunning={isRunning}
          time={intervalloSeconds}
          maxTime={59}
          setTime={setIntervalloSeconds}
          twStyle={inputStyle}
        />
      </div>
    </div>
  );
}
