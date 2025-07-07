/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...require("@repo/eslint-config/prettier"),
};

module.exports = config;
