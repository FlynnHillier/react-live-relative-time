import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import external from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        banner: '"use client"',
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        banner: '"use client"',
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external(["react", "react-dom"]),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
