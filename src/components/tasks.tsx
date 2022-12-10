import { useState } from "react";

export default function Tasks() {
  const date = new Date();
  function currentDay() {
    const day = date.getDate();
    if (day === 1 || day === 21 || day === 31) {
      return day + "st";
    } else if (day === 2 || day === 22) {
      return day + "nd";
    } else if (day === 3 || day === 23) {
      return day + "rd";
    } else {
      return day + "th";
    }
  }
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const todayDate =
    days[date.getDay()] + " " + currentDay() + " " + months[date.getMonth()];

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <>
      <section className="">
        <section className="grid grid-cols-[500px_500px] py-8">
          <section className="ml-8 flex  gap-2">
            <h1 className="text-2xl font-bold text-[#1F1F1F]">Today</h1>
            <h2 className="py-2 text-gray-400">{todayDate}</h2>
          </section>
          <section className="btn5 flex py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            <h1>View</h1>
          </section>
        </section>
        <section></section>
        <section></section>
      </section>
    </>
  );
}
