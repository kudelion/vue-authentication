import { createStore } from "vuex";
import authenticate from "./modules/authenticate/index";

const store = createStore ({
    modules: {
        authenticate,
    }
});

export default store;