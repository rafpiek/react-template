import { AboutPage } from "pages/About/AboutPage";
import { HomePage } from "pages/Home/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {NotFoundPage} from "pages/NotFound/NotFoundPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage />  },
  { path: "*", element: <NotFoundPage /> },
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
