import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/schema/**/*.graphql",
  generates: {
    "src/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
export default config;
