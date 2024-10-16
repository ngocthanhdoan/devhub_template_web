console.log("File name: main.js");
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import CathayTranslator from "./plugins/cathay-translator.js";
import Router from "./routers";
import { setLocale } from "yup";

const app = createApp(App);
// Yup validation
setLocale({
    mixed: {
        required: "COMMON_Validate_0001",
    },
});
import(
    `./assets/languages/${window.sessionStorage.langs ?? "vi_VN"}.json`
).then((languages) => {
    app
        .provide("instance", app)
        .use(createPinia())
        .use(Router)
        .use(CathayTranslator, { languages })
        .mount("#app");
});
