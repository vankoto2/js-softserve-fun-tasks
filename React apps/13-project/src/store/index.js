const redux = require("redux");

const counter = (state = { counter: 0 }, action) => {
  if (action.type === "increase") {
    return { counter: state.counter + 1 };
  }
};

const store = redux.createStore(counter);

const counterSub = () => {
    const latestState = store.getState()
    console.log(latestState);
}

store.subscribe(counterSub)

store.dispatch({ type: "increase" });
