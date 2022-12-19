import { useState, useRef } from "react";

export default function Overlay({ toggleOverlay }: any) {
  return (
    <>
      <section className="ml-[200px]  h-[150px] w-[915px] rounded-xl border border-gray-300">
        <section>
          <form action="">
            <input
              type="text"
              name="Task Name"
              id="Task name"
              placeholder="Task Name"
              className="h-full w-full p-2"
              autoComplete="off"
            />
          </form>
        </section>
        <section>
          <form action="">
            <input
              type="text"
              name="Task Name"
              id="Task name"
              placeholder="Description"
              className="h-full w-full p-2"
              autoComplete="off"
            />
          </form>
        </section>
        <section>
          <section></section>
          <section className="mr-2 flex justify-end gap-4 pt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="btn5 h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 6h.008v.008H6V6z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="btn5 h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="btn5 h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </section>
        </section>
      </section>
      <section className=" ml-[900px] flex p-2">
        <div className="p-2">
          <button
            className="btn7 bg-gray-200   hover:bg-gray-400"
            onClick={toggleOverlay}
          >
            Cancel
          </button>
        </div>
        <div className="p-2">
          <button className="btn7 bg-[#c06c63]  text-white hover:bg-[#C84C3F]">
            Add Task
          </button>
        </div>
      </section>
    </>
  );
}
