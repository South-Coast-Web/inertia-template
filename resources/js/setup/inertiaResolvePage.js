import DefaultLayout from "layouts/Default.vue";

/**
 * Function that resolves the requested page and falls back to a default layout
 */
export const inertiaResolvePage = async (name) => {
	const pages = import.meta.glob("../pages/**/*.vue", { eager: false });
	let page = pages[`../pages/${name}.vue`];
	page = typeof page === "function" ? await page() : page;
	page.default.layout = page.default.layout || DefaultLayout;
	return page;
};
