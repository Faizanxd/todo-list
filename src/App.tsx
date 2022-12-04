import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Default from "./pages/default";
import Login from "./pages/login";
import Signup from "./pages/signup";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Default />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={""}></Route>
      </>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

function App() {
  return <AppRouter />;
}

export default App;
