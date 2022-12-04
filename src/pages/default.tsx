import { Link, NavLink } from "react-router-dom";
import todoLogo from "../assets/todoistlog.png";

export default function Default(): any {
  return (
    <>
      <header className="py-6 px-6">
        <nav className="grid grid-cols-[250px_auto_300px] items-center gap-4">
          <section className="h-full w-full">
            <Link to="/">
              <img
                className="h-full w-[70%] object-contain px-4"
                src={todoLogo}
                alt="weather logo"
              />
            </Link>
          </section>
          <section className="h-12 ">
            <ul className="flex gap-2 py-2">
              <li>
                <NavLink className="btn" to="/">
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink className="btn" to="/">
                  Templates
                </NavLink>
              </li>
              <li>
                <NavLink className="btn" to="/">
                  For Teams
                </NavLink>
              </li>
              <li>
                <NavLink className="btn" to="/">
                  Resources
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="inline-block h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink className="btn" to="/">
                  Pricing
                </NavLink>
              </li>
            </ul>
          </section>
          <section>
            <ul className="flex gap-2 py-2">
              <li>
                <NavLink className="btn" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="btn2" to="/signup">
                  Start For Free
                </NavLink>
              </li>
            </ul>
          </section>
        </nav>
      </header>
      <main className="flex justify-center">
        <section className="h-full w-[75%]  p-[150px]">
          <div className="p-6 text-6xl font-bold text-[#1F1F1F]">
            Organize your work and life, finally.
          </div>
          <div className=" p-6 text-xl text-neutral-800">
            Become focused, organized, and calm with Todoist. The world’s #1
            task manager and to-do list app.
          </div>
          <div className="flex justify-center p-6">
            <NavLink className="btn2 " to="/signup">
              Start For Free
            </NavLink>
          </div>
        </section>
      </main>
      <footer>
        <section className="grid h-full w-full grid-cols-[300px_300px_300px_300px_100px] border-t-2 border-neutral-400">
          <section className="p-8">
            <Link to="/">
              <img
                className="w-[70%] object-contain "
                src={todoLogo}
                alt="weather logo"
              />
            </Link>
            <div className="text-md h-full w-full p-2">
              Join millions of people who organize work and life with Todoist.
            </div>
          </section>
          <section className="p-4">
            <ul className="">
              <li className="m-4   text-lg text-[#1F1F1F]">Features</li>
              <li className="btn3  ">How it Works</li>
              <li className="btn3  ">For Teams</li>
              <li className="btn3  ">Pricing</li>
              <li className="btn3  ">Templates</li>
            </ul>
          </section>
          <section className="p-4">
            <ul className="">
              <li className="m-4   text-lg text-[#1F1F1F]">Resources</li>
              <li className="btn3  ">Download Apps</li>
              <li className="btn3  ">Help Center</li>
              <li className="btn3  ">Productivity Methods</li>
              <li className="btn3  ">Integrations</li>
              <li className="btn3  ">Channel Partners</li>
              <li className="btn3  ">Developer Api</li>
              <li className="btn3  ">Status</li>
            </ul>
          </section>
          <section className="p-4">
            <ul className="">
              <li className="m-4   text-lg text-[#1F1F1F]">Company</li>
              <li className="btn3  ">About Us</li>
              <li className="btn3  ">We are Hiring!</li>
              <li className="btn3  ">Blog</li>
              <li className="btn3  ">Press</li>
              <li className="btn3  ">Twist</li>
            </ul>
          </section>
          <section className="p-4">
            <ul className="">
              <li className="btn3">
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
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </li>
              <li className="btn3  ">
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
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </li>
              <li className="btn3  ">
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
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </li>
              <li className="btn3  ">
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
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </li>
            </ul>
          </section>
        </section>
      </footer>
    </>
  );
}
