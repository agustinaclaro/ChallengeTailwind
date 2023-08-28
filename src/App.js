import { RouterProvider } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { route } from "./routes/routes";

function App() {
  return (
    <div className="App font-mono">
      <NavBar />
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
