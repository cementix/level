import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
