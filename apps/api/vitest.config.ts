import swc from "unplugin-swc";
import { defineProject } from "vitest/config";

export default defineProject({
  test: {
    globals: true,
    include: ["src/**/*.test.ts"],
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    swc.vite({
      module: { type: "es6" },
    }),
  ],
});
