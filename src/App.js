
import DetailsPost from "./Pages/DetailsPost/DetailsPost";
import Home from "./Pages/Home/Home";
import Root from "./Pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/details/:id" element={<DetailsPost />} />
    </Route>

  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
