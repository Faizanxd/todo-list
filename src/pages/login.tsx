import todoLogo from "../assets/todoistlog.png";
import { Link, NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <header className="p-6">
        <nav className="ml-[150px] w-[250px]">
          <section className="h-full w-full">
            <Link to="/">
              <img
                className="h-full w-[70%] object-contain px-4"
                src={todoLogo}
                alt="weather logo"
              />
            </Link>
          </section>
        </nav>
      </header>
      <main>
        <section className="ml-[150px] p-12">
          <section>
            <h1 className="text-3xl font-semibold text-[#1F1F1F]">Log in</h1>
          </section>
          <section>
            <ul className="h-full w-full text-center">
              <li className="btn3 m-4 w-[25%] border-2 border-neutral-100 ">
                <a href="" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="m-2 inline h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Continue with Google
                </a>
              </li>
              <li className="btn3 m-4 w-[25%] border-2 border-neutral-100 ">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="m-2 inline h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Continue with Facebook
                </a>
              </li>
              <li className="btn3 m-4 w-[25%] border-2 border-neutral-100">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="m-2 inline h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Continue with Apple
                </a>
              </li>
            </ul>
          </section>
          <section></section>
        </section>
      </main>
    </>
  );
}
