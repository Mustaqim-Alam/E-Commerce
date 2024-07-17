import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";

const formatTime = (timeInSecond: number) => {
  const hours = Math.floor(timeInSecond / 3600);
  const minute = Math.floor((timeInSecond % 3600) / 60);
  const second = timeInSecond % 60;
  const miliSecond = timeInSecond % 40;

  const hoursInString = hours.toString().padStart(2, "0");
  const minuteInString = minute.toString().padStart(2, "0");
  const secondInString = second.toString().padStart(2, "0");
  const milisecondInString = miliSecond.toString().padStart(2, "0");

  return `${hoursInString}: ${minuteInString}:${secondInString}:${milisecondInString}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<Boolean>(false);

  useEffect(() => {
    let intervalID: number;
    if (isRunning) {
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 100);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [isRunning]);

  return (
    <div className="admin-container">
      <Sidebar />
      <main className="dashboard-app-container">
        <h1>Stop Watch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsRunning((prev) => !prev)}>Start</button>
            <button >Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
