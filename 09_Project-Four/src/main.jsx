import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Layout from "./Layouts/Layout";
import GitHubPage,{githubDataLoader} from "./components/Github";
import UserPage from "./components/UserPage";
// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Layout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/About",
//         element: <About />,
//       },
//       {
//         path: "/Contact-Us",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact-Us" element={<Contact/>}/>
      <Route loader={githubDataLoader} path="/Github" element={<GitHubPage/>}/>
      <Route path="/users/:userId" element={<UserPage/>}/>
    </Route>
  )
)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
