import FeedbackButton from "./components/feedbackButton";
import StopwatchApp from "./components/stopwatchApp";

export default function Home() {
  return (
    <>
      <main className="my-auto flex flex-col">
        <StopwatchApp />
      </main>
      <div className="footer mb-24 text-center">
        <a
          className="coffee-button my-4 bg-accent text-sm"
          href="https://ko-fi.com/rndomlab"
        >
          Buy Me a Coffee
        </a>
        <br />
        <FeedbackButton />
      </div>
    </>
  );
}
