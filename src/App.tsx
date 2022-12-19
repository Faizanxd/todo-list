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
import Loader from "./components/loader";

function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const { user, loading } = useAuth();

  if (!user && !loading) {
    return <Navigate to="/login" />;
  }
  return children;
}

function AppRouter() {
  const { loading, user } = useAuth();
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
          <Route index element={<Todo />} />
        </Route>
      </>
    )
  );
  return loading && !user ? (
    <div>
      <Loader />
    </div>
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
