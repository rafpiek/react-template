import { AboutPage } from "pages/About/AboutPage";
import { HomePage } from "pages/Home/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage />  }
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}