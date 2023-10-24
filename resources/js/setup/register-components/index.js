import { registerComponents } from "vue3-auto-vite-components";
import { registerGlobal } from "./globalComponents";

export const registerComponents = {
    install: (app, options) => {
        app.use(registerComponents, {
            namespace: "Evo",
            sync: import.meta.glob("../../components/sync/**/*.vue", {
                eager: true,
            }),
            async: import.meta.glob("../../components/async/**/*.vue", {
                eager: false,
            }),
            asyncLoading: import.meta.glob(
                "../../components/async/**/*Loading.vue",
                {
                    eager: true,
                }
            ),
        });
        registerGlobal(app);
    },
};
