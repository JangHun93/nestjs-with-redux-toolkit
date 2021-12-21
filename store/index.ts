import { configureStore } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

import reducer from "./modules";

const makeStore = (context: Context) =>
  // store를 생성한다.
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // redux-toolkit은 devTools등의 미들웨어들을 기본적으로 제공.
    // 여기에 사용하고 싶은 미들웨어가 있다면 추가적으로 정의해준다.
    devTools: process.env.NODE_ENV !== "production",
  });

// wrapper를 생성한다.
// reducer 모듈 만들기 --> 리듀서 모듈 합치기 --> 스토어 생성
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
