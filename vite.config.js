import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.js"],
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        AutoImport({
            imports: [
                "vue",
                {
                    "@inertiajs/vue3": ["useForm", "router"],
                },
            ],
            dirs: ["./resources/js/composables", "./resources/js/helpers"],
            eslintrc: {
                enabled: true, // Default `false`
                filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            },
        }),
    ],
    resolve: {
        alias: {
            components: resolve("resources/js/components"),
            composables: resolve("resources/js/composables"),
            layouts: resolve("resources/js/layouts"),
            ziggy: resolve("vendor/tightenco/ziggy/src/js"),
            inertiaRoutes: resolve("vendor/adminui/inertia-routes"),
        },
    },
});
