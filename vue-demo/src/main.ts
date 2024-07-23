import {createApp} from "vue";
import App from "./App.vue"; // import component
import router from "./router/index";

const app = createApp(App);
// use router
app.use(router);
// mount the app to the DOM ../index.html:12
app.mount("#app"); // <div id="app"></div>
