import { createSSRApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import DefaultLayout from "layouts/Default.vue";
import { registerComponents } from "./setup";
import { useInertiaRoutes } from "inertiaRoutes";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.vue", { eager: false });
        let page = pages[`./pages/${name}.vue`];
        page.default.layout = page.default.layout || DefaultLayout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        const inertiaRoutesPlugin = useInertiaRoutes(props);

        createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(inertiaRoutesPlugin)
            .use(registerComponents)
            .mount(el);
    },
});
