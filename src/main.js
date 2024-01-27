import { createApp } from "vue";
// import { createPinia } from "pinia";
import utils from "./utils";
import globals from "./globals";

import '@/assets/css/style.css';
import '@/assets/css/index.css';
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true);

import App from "./App.vue";
import router from "./router";
// import { provideApolloClient } from "@vue/apollo-composable";
// import { apolloClient } from "@/apollo.default_client.config";


// provideApolloClient(apolloClient);

const app = createApp(App).use(router);
globals(app);
utils(app);


app.mount("#app");
