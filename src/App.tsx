import { useState } from "react";

import Home from "./Home";
import Login from "./Login";
import SiguUp from "./SignUp";

const App = () => {
  const [user, setUser] = useState<any>();

  if (user) {
    return <Home />;
  }

  return window.location.pathname === "/register" ? <SiguUp SignUpUser={setUser} /> : <Login SignInUser={setUser} />;
};

export default App;
