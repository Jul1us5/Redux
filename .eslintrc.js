module.exports = {
   "env": {
       "browser": true,
       "es2021": true,
       "node": true,
       "jest": true
   },
   "extends": [
       "eslint:recommended",
       "plugin:react/recommended"
   ],
   "parserOptions": {
       "ecmaFeatures": {
           "jsx": true
       },
       "ecmaVersion": "latest",
       "sourceType": "module"
   },
   "plugins": [
       "react"
   ],
   "settings": {
       react: {
         version: 'detect',
       },
   },
   "rules": {
       "react/jsx-no-duplicate-props": [1, { "ignoreCase": false }]
   }
}
