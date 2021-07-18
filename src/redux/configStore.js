import { combineReducers, createStore } from "redux";
import BaiTapGameXucXacReducer from "./BaiTapXucXac";
import baiTapOanTuXiReducer from './BaiTapOanTuXi';
import BaiTapChonGheReducer from './BaiTapBooking';

const rootReducer = combineReducers({
    BaiTapGameXucXacReducer,
    baiTapOanTuXiReducer,
    BaiTapChonGheReducer
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());