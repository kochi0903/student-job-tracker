import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
// import Login from "../components/Login";
// import Register from "../components/Register";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
          path: "/add-job",
          element: <JobForm/>
        },
        {
          path: "/jobs",
          element: <JobList/>
        },
      ]
    },
  ]);

  export default router;