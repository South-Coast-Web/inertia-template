import { registerComponents as autoRegisterComponents } from "vue3-auto-vite-components";
import { registerGlobal } from "./globalComponents";

/**
 * Setup all components for the application. Any components placed in either `async` or `sync` will
 * be automatically available as `<NamespaceFolderComponent></NamespaceFolderComponent>`, so, for example,
 * a component in `components/async/site-checkout/Basket.vue` will be available as <EvoSiteCheckoutBasket />
 * where the namespace is `Evo`.
 */
export const registerComponents = {
	install: (app, options) => {
		app.use(autoRegisterComponents, {
			namespace: "Evo",
			sync: import.meta.glob("../../components/sync/**/*.vue", {
				eager: true,
			}),
			async: import.meta.glob("../../components/async/**/*.vue", {
				eager: false,
			}),
			asyncLoading: import.meta.glob("../../components/async/**/*Loading.vue", {
				eager: true,
			}),
		});
		registerGlobal(app);
	},
};
