import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import MyJob from "./pages/MyJob";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";
import Job from "./pages/Job";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <LandingPage />
        },
        {
          path: '/onboarding',
          element: <Onboarding />
        },
        {
          path: '/jobs',
          element: <JobListing />
        },
        {
          path: '/job/:id',
          element: <Job />
        },
        {
          path: '/post-job',
          element: <PostJob />
        },
        {
          path: '/savedjob',
          element: <SavedJob />
        },
        {
          path: '/myjob',
          element: <MyJob />
        }
      ]
    }
  ])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
  </ThemeProvider>
  )
}

export default App
