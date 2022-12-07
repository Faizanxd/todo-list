import todoLogo from "../assets/todoistlog.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/todologin logo.png";
import { useAuth } from "../common/auth";

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  async function authentication(event: React.SyntheticEvent) {
    const { email, password } = event.target as typeof event.target & {
      email: HTMLInputElement;
      password: HTMLInputElement;
    };
    event.preventDefault();
    const user = await signIn(email.value, password.value);
    if (user) {
      navigate("/todo");
    }
  }
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
        <section className="flex">
          <section className=" ml-[150px] w-full pt-12">
            <section>
              <h1 className="text-3xl font-semibold text-[#1F1F1F]">Log in</h1>
            </section>
            <section>
              <ul className="h-full w-full text-center">
                <li className="btn3 m-4 w-[75%] border-2 border-neutral-100 font-semibold text-[#1F1F1F]">
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
                <li className="btn3 m-4 w-[75%] border-2 border-neutral-100 font-semibold text-[#1F1F1F]">
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
                <li
                  className="btn3 m-4 w-[75%] border-2 border-neutral-100 font-semibold text-[#1F1F1F]"
                  text-semibold
                >
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
            <section>
              <form onSubmit={authentication}>
                <label htmlFor="" className="block text-lg text-[#1F1F1F] ">
                  Email
                  <input
                    type="email"
                    name="Email Address"
                    id="email"
                    placeholder="Enter your email..."
                    className="block w-[75%] rounded-md border-2 border-neutral-100 p-2"
                  />
                </label>
                <label htmlFor="" className="block text-lg text-[#1F1F1F] ">
                  Password
                  <input
                    type="password"
                    name="Password"
                    id="password"
                    placeholder="Enter your password"
                    className="block w-[75%] rounded-md border-2 border-neutral-100 p-2"
                  />
                </label>

                <button className="btn2 mt-5 w-[75%]">Log in</button>
              </form>
            </section>
            <ul className="p-4">
              <li>
                Don't have an account?
                <NavLink to={"/signup"} className="p-2 underline">
                  SignUp
                </NavLink>
              </li>
            </ul>
          </section>

          <section className="">
            <img
              src={backgroundImage}
              alt=""
              className="object-contain pt-[150px] pr-8"
            />
          </section>
        </section>
      </main>
    </>
  );
}
