import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import counter from "./counter";

const reducer = (state: any, action: any) => {
  // SSR 작업 수행 시 HYDRATE라는 액션을 통해서
  // 서버의 스토어와 클라이언트의 스토어를 합쳐주는 작업을 수행
  if (action.type === HYDRATE) {
    const nextState = { ...state, ...action.payload };
    return nextState;
  }

  // 함수명 그대로 정의한 리듀서 모듈들을 결합하는 역할을 한다.
  return combineReducers({
    counter,
    // 여기체 추가
  })(state, action);
};

export default reducer;
