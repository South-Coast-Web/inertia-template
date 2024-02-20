import { createSSRApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { registerComponents } from "./setup";
import { useInertiaRoutes } from "inertiaRoutes";
import { inertiaResolvePage } from "./setup/inertiaResolvePage";

createInertiaApp({
	resolve: inertiaResolvePage,
	setup({ el, App, props, plugin }) {
		const inertiaRoutesPlugin = useInertiaRoutes(props);

		createSSRApp({ render: () => h(App, props) })
			.use(plugin)
			.use(inertiaRoutesPlugin)
			.use(registerComponents)
			.mount(el);
	},
});
