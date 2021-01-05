import rootReducer from "./reducer";
const createStore = require("redux").createStore;

const store = createStore(rootReducer)

export default store;