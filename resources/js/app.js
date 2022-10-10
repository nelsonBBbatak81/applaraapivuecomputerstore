import "./bootstrap";
import router from "./router/index";
// import { registerBaseComponents } from "./helpers/registerBaseComponents";
import Layout from "./layout/Layout.vue";
import Navbar from "./components/Header/Navbar.vue";
import FooterContent from "./components/Footer/Footer.vue";

import { createApp } from "vue";

const app = createApp({});

// registerBaseComponents(app);

app.component("nav-bar", Navbar);
app.component("footer-content", FooterContent);
app.component("layout-component", Layout);

app.use(router);

app.mount("#app");
