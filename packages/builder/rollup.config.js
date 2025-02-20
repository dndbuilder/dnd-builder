import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    sourcemap: true,
  },
  external: ["react", "react-dom", "react/jsx-runtime"],
  plugins: [
    typescript(),
    postcss({
      extract: "style.css",
      minimize: true,
      config: "postcss.config.cjs",
    }),
    terser(),
  ],
};
