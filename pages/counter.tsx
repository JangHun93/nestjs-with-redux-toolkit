import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as counterActions from "../store/modules/counter";
import { useRouter } from "next/router";

interface ICounterState {
  counter: {
    value: number;
  };
}

function CounterPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const value = useSelector(({ counter }: ICounterState) => counter.value);
  console.log("value : ", value);
  const plus = useCallback(
    ({ value }) => dispatch(counterActions.increment()),
    [dispatch]
  );
  const minus = useCallback(
    ({ value }) => dispatch(counterActions.decrement()),
    [dispatch]
  );

  return (
    <div>
      <h1>Counter</h1> <button onClick={() => minus(value)}>-</button>{" "}
      <span>{value}</span> <button onClick={() => plus(value)}>+</button>
      <button onClick={() => router.push("/")}>go index</button>
    </div>
  );
}

export default CounterPage;
