import { useState } from "react";
import SettingsPanel from "./settingsPanel";

export default function Settings({
  isRunning,
  setIntervallo,
  isIntervalloChecked,
  setIsIntervalloChecked,
}: {
  isRunning: boolean;
  setIntervallo: React.Dispatch<React.SetStateAction<number>>;
  isIntervalloChecked: boolean;
  setIsIntervalloChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      <button
        className="relative -top-6 z-20 mx-auto h-6 min-w-min rounded-b-sm text-xs leading-3"
        onClick={() => {
          setShowPanel(!showPanel);
        }}
      >
        Settings
      </button>
      <SettingsPanel
        isRunning={isRunning}
        showPanel={showPanel}
        setIntervallo={setIntervallo}
        isIntervalloChecked={isIntervalloChecked}
        setIsIntervalloChecked={setIsIntervalloChecked}
      />
    </>
  );
}
