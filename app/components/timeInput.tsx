import { SetStateAction } from "react";

export default function TimeInput({
  isRunning,
  time,
  maxTime,
  setTime,
  twStyle,
}: {
  isRunning: boolean;
  time: number;
  maxTime: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  twStyle: string;
}) {
  return (
    <input
      type="number"
      value={time >= 0 ? String(time).padStart(2, "0") : ""}
      onChange={(e) =>
        setTime(Math.min(parseInt(e.target.value) || 0, maxTime))
      }
      onClick={(e) => e.currentTarget.select()}
      placeholder="00"
      disabled={isRunning}
      className={twStyle}
    />
  );
}
