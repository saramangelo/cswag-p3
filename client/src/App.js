import React from "react";
import Login from "./pages/login";
import "./index.css";

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return <Login />;
}

export default App;
