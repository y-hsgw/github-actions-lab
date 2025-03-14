import swc from "unplugin-swc";
import { defineProject } from "vitest/config";

export default defineProject({
  test: {
    globals: true,
    include: ["src/**/*.test.ts"],
  },
  plugins: [
    swc.vite({
      module: { type: "es6" },
    }),
  ],
});
