import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import {ReisterReducer} from "./Login/reducer"

const rootReducer = combineReducers({
  Register: ReisterReducer,
});


const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };
