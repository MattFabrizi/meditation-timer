"use client";

export default function Controls({
  isRunning,
  setIsRunning,
}: {
  isRunning: boolean;
  setIsRunning: any;
}) {
  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  // const reset = () => {
  //   setTime(500);
  // };

  return (
    <div className="stopwatch-controls flex flex-auto justify-center">
      <button
        className="stopwatch-button mb-[7%] bg-secondary tracking-widest text-white"
        onClick={startAndStop}
      >
        {isRunning ? "PAUSE" : "START"}
      </button>
      {/* <button className="stopwatch-button" onClick={reset}>
          Reset
        </button> */}
    </div>
  );
}
