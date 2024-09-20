import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import PurgeIcons from "vite-plugin-purge-icons";

export default defineConfig({
  base: "",
  plugins: [PurgeIcons()],
  build: {
    outDir: fileURLToPath(new URL("./templates/assets/dist", import.meta.url)),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/main.ts"),
        style: path.resolve(__dirname, "src/styles/style.scss"),
        fontHack: path.resolve(__dirname, "src/styles/font-hack.scss"),
        fontPixel: path.resolve(__dirname, "src/styles/font-pixel.scss"),
      },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
