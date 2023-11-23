module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
        "jsxPragma": "React",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    /*
    off => 關閉規則
    warn => 警告規則
    error => 錯誤規則
    */
    "rules": {
        //eslint(https://eslint.org/docs/rules)
        "no-var": "error",
        "no-multiple-empty-lines": ["warn", { "max": 1 }], //不允許多行空行
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-unexpected-multiline": "error", //不允許多行
        "no-uneless-escape": "off", //不允許不必要的反斜線

        //typescript(https://typescript-eslint.io/rules)
        "@typescript-eslint/no-unused-vars": "error", //不允許不必要的變數
        "@typescript-eslint/prefer-ts-expect-error": "error", //不允許不必要的ts-expect-error
        "@typescript-eslint/no-explicit-any": "off", //不允許any
        "@typescript-eslint/no-non-null-assertion": "off", //不允許非空
        "@typescript-eslint/no-namespace": "off", //不允許命名空間
        "@typescript-eslint/semi": "off", //不允許分號

        // eslint-plugin-vue(https://eslint.vuejs.org/rules)
        "vue/multi-word-component-names": "off", //不允許多字元組件
        "vue/script-setup-uses-vars": "error", //不允許不必要的變數
        "vue/no-mutating-props": "off", //不允許不必要的props
        "vue/attribute-hyphenation": "off", //不允許不必要的標籤
    }
}
