import { Route, Switch, Redirect } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AddQuote from "./pages/AddQuote";
import AllQuote from "./pages/AllQuotes";

function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/add-quotes">
            <AddQuote />
          </Route>
          <Route path="/quotes">
            <AllQuote />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
