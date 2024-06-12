import StopwatchApp from "./stopwatchApp";

export default function Home() {
  return (
    <>
      <main className="flex flex-col p-4 my-auto">
        <StopwatchApp />
      </main>
      <div className="footer text-center">
        <button className="my-4 text-sm bg-accent">
          Buy Me a Coffee
        </button>
      </div>
    </>
  );
}
