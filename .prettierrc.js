module.exports = {
  trailingComma: "none",
  extends: [
    //继承 vue 的标准特性
    "plugin:vue/essential",
    "eslint:recommended",
    //避免与 prettier 冲突
    "plugin:prettier/recommended"
  ]
};
