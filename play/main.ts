import { createApp } from "vue";
import App from "./app.vue";
import lolUi from "@lol-ui/components"
const app = createApp(App);

app.use(lolUi).mount("#app");
