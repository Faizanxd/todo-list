import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./common/auth";
import Default from "./pages/default";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Todo from "./pages/todo";
import { Navigate } from "react-router-dom";
import Tasks from "./components/tasks";

function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

function AppRouter() {
  const { loading } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Default />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="/todo" element={<Todo />}>
            <Route index element={<Tasks />} />
          </Route>
        </Route>
      </>
    )
  );
  return loading ? (
    <section className="grid h-screen w-screen place-items-center">
      Loading..
    </section>
  ) : (
    <RouterProvider router={router}></RouterProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
