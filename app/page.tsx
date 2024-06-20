import StopwatchApp from "./components/stopwatchApp";

export default function Home() {
  return (
    <>
      <main className="my-auto flex flex-col p-6">
        <StopwatchApp />
      </main>
      <div className="footer mb-24 text-center">
        <button className="my-4 bg-accent text-sm">Buy Me a Coffee</button>
      </div>
    </>
  );
}
