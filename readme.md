# SETING UP THE PROJECT 
## 1. Install libaries 
`npm install --save react react-dom react-router redux react-redux`
## 2. Install utilities libariers 
`npm install --save-dev jest enzyme @babel/core @babel/cli @babel/preset-env @babel/preset-react `

## 3. Setup BabelConfig and JestConfig
####3.a Babel
We use babel to transform our code with new sugar syntastic feature to native syntax that all platform could run. 
So we gonna tell babel hey transform react code js et nay es2015 feature to normal js also. For that we use plugins or preset in bable 

In a `babel.config.js` just add this 

```
module.exports = {
  "presets":[
    "@babel/react", "@babel/env"
  ]
} ```
