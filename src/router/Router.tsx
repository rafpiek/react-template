import { HomePage } from "pages/Home/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> }
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}