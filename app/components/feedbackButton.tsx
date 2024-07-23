"use client";
import { useState } from "react";

export default function FeedbackButton() {
  const [tooltipVisibility, setTooltipVisibility] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("rndomlab@gmail.com");
    setTooltipVisibility(true);
    setTimeout(() => setTooltipVisibility(false), 1000);
  }

  return (
    <button
      onClick={() => copyEmail()}
      className="relative my-3 h-4 rounded-none bg-transparent p-0 text-sm underline hover:bg-white"
    >
      {tooltipVisibility ? (
        <span className="absolute top-[135%] w-full bg-accent">
          email copied
        </span>
      ) : null}
      send me a Feedback
    </button>
  );
}
