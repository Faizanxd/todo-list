import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./common/auth";
import Default from "./pages/default";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Todo from "./pages/todo";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Default />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Todo />}></Route>
      </>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
