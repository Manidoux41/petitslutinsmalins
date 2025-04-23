overrides: [
    {
      files: ["app/generated/prisma/**/*"],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-object-type": "off"
      }
    }
  ]
  