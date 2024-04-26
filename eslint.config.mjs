import globals from "globals";

import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

export default [
  { languageOptions: { globals: globals.node } },
  ...compat.extends("standard-with-typescript"),
  {
    rules: {
      "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": false
      }],
    },
    plugins: {
      prettier
    }
  }
];
