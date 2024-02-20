import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
import { registerComponents } from "./setup";
import { useInertiaRoutes } from "inertiaRoutes";
import { inertiaResolvePage } from "./setup/inertiaResolvePage";

createServer((page) =>
	createInertiaApp({
		page,
		render: renderToString,
		resolve: inertiaResolvePage,
		setup({ App, props, plugin }) {
			const inertiaRoutesPlugin = useInertiaRoutes(props);

			return createSSRApp({
				render: () => h(App, props),
			})
				.use(plugin)
				.use(inertiaRoutesPlugin)
				.use(registerComponents);
		},
	}),
);
