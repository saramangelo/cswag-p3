import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ViewTicket from "./pages/ViewTicket";
import Form from "react-bootstrap/Form";
import "./App.css"

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  console.log(authLink);
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  console.log(token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [label, setLabel] = useState(localStorage.getItem("Dark Mode") || "Dark Mode");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    if (label === "Dark Mode") {
      setLabel("Light Mode")
      localStorage.setItem("Light Mode", "Light Mode");
    }
    } else {
      setTheme("light");
      setLabel("Dark Mode");
      localStorage.setItem("Dark Mode", "Dark Mode");
    }
  };

  // modal variable states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className={`App ${theme}`}>
          <div className="flex-column justify-flex-start min-100-vh">

            <div>
              <div>
              <Form onClick={toggleTheme} className="toggle-button">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label={label}
                />
              </Form>

              </div>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard handleClose={handleClose} handleShow={handleShow} show={show}/>} />
                <Route path="/viewticket/:ticketId" element={<ViewTicket handleClose={handleClose} handleShow={handleShow} show={show}/>} />

                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
