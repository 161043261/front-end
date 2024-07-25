import {createApp} from "vue";
import App from "./App.vue"; // import component
import router from "./router/index";
//
// 1. import pinia
//
import {createPinia} from "pinia";

const app = createApp(App);
// use router
app.use(router);

//
// 2. create pinia
//
const pinia = createPinia();
//
// 3. use pinia
//
app.use(pinia);

// mount the app to the DOM ../index.html:12
app.mount("#app"); // <div id="app"></div>