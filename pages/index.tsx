import type { NextPage } from "next";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as counterActions from "../store/modules/counter";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const value = useSelector(({ counter }) => counter.value);

  const plus = useCallback(
    ({ value }) => {
      dispatch(counterActions.increment({ value }));
    },
    [dispatch]
  );
  const minus = useCallback(
    ({ value }) => {
      dispatch(counterActions.decrement({ value }));
    },
    [dispatch]
  );

  https: return (
    <div>
      <div>
        {" "}
        <h1>Counter</h1> <button onClick={() => minus({ value })}>-</button>{" "}
        <span>{value}</span> <button onClick={() => plus({ value })}>+</button>{" "}
      </div>
    </div>
  );
};

export default Home;
