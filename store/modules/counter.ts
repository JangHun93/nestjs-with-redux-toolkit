import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 }; // 초기상태 정의

// createSlice: action과 reducer를 한 번에 정의한다.
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // 액션 생성함수
export default counterSlice.reducer; // 리듀서
