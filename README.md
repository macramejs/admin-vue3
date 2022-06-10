# Vue 3 + TypeScript + Vite + Macrame

:construction: Work in progress...

## Setup Development Environment

```sh
git clone git@github.com:macramejs/admin packages/admin-vue3
git clone git@github.com:macramejs/macrame packages/macrame-vue3
```

## Steps for production

1. Remove packages & package-lock.json

```sh
rm -rf packages
rm pacakge-lock.json
```

2. Remove npm packages `@macramejs/admin-vue3` & `@macramejs/macrame-vue3` from package.json and reinstall them via npm.

3. Uncomment lines in `tailwind.config.js`.