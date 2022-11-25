import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/yt-clone-responsive/",
    server: {
        watch: {
            usePolling: true,
        },
    },
});
