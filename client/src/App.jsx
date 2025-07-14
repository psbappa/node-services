import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import Header from "./components/Header";
import JunkyBunky from "./pages/JunkyBunky/JunkyBunky";
import ReduxComponent from "./pages/redux/ReduxComponent";
import NewsFeed from "./pages/NewsFeed/index"; // Importing the NewsFeed component
import Layout from "./components/Layout";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      {/* <ThemeContext.Provider
        value={{
          theme,
          toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")),
        }}
      > */}
      <div
        style={{
          background: theme === "light" ? "#fff" : "#222",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="redux" element={<ReduxComponent />} />
              <Route path="/news-feed" element={<NewsFeed />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/junky-bunky"
                element={
                  <PrivateRoute>
                    <JunkyBunky />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Router>

        {/* <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="redux" element={<ReduxComponent />} />
            <Route path="/news-feed" element={<NewsFeed />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/junky-bunky"
              element={
                <PrivateRoute>
                  <JunkyBunky />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router> */}
      </div>
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default App;
// This is the new authReducer file
