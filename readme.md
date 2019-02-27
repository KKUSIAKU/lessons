# SETING UP THE PROJECT 
## 1. Install libaries 
`npm install --save react react-dom react-router redux react-redux`

## 2. Install utilities libariers 
`npm install --save-dev jest enzyme @babel/core @babel/cli @babel/preset-env @babel/preset-react `

## 3. Setup BabelConfig and JestConfig
#### 3.a Babel
We use babel to transform our code with new sugar syntastic feature to native syntax that all platform could run. 
So we gonna tell babel hey transform react code js et nay es2015 feature to normal js also. For that we use plugins or preset in bable 

In a `babel.config.js` just add this 

```
module.exports = {
  "presets":[
    "@babel/react", "@babel/env"
  ]
} 

```

#### 3.b Jest

To start jest itself  does not require any specific config file to start testing, assume for instance you have normal js function that you want to test. So just set up jest.config.js that output an empty object
https://jestjs.io/docs/en/configuration.html

However to test React component utility, we gonna use an utility enzyme  library for that to we have to tell jest how it should handle this. To use it, install this adapter library which acheive kind of bridge between enzyme and jest 

`npm i --save-dev enzyme enzyme-adapter-react-16 `

write you test, here we gonna check only a props value that a component hold and we will built a simple input element

- We setup our work environment:
-- install require dependecies as well as development utility libraries, and add necessary configuration
-- Write the first react component using JSX (template) and ES6 (class) syntax 
-- Set a props format and set a react element default props 
-- write unit test 
