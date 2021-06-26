import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {mainReducer} from "./reducer";
import logger from 'redux-logger';



const middleware = applyMiddleware(thunk,logger);

const store = createStore(mainReducer, middleware);

export default store;
