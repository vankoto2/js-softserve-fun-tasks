import { Fragment } from "react";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!auth ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
