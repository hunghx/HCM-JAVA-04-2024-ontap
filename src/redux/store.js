import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducers } from "./reducer";
const composeEnhancers =  composeWithDevTools();
const store = createStore(
    reducers,composeEnhancers
)

export default store;