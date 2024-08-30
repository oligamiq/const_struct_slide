import wasm from "vite-plugin-wasm";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), wasm()],
    base: process.env.NODE_ENV === "production" ? "/const_struct_slide/" : "/",

    worker: {
        // Not needed with vite-plugin-top-level-await >= 1.3.0
        // format: "es",
        plugins: [wasm()],
    },
});
