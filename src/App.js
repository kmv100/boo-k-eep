import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import NotFound from "./404";
import Login from "./Login";
import useToken from "./useToken";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  // const token = getToken();
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path='/blogs/:id' element={< BlogDetails />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
