# Super Galactic Age Calculator

### **Ryan Murry** | Epicodus Javascript Week 1 Code Review, 08.03.2018

## Planning


### *Configuration/dependencies*

  | Dependency                           | Description                                                                |
  | ------------------------------------ | -------------------------------------------------------------------------- |
  | babel-core v. 6.26.0                 | Babel compiler core                                                        |
  | babel-loaded v. 7.1.3                | Babel loader for webpack                                                   |
  | babel-present-es2015 v. 6.24.1       | Specifies how Babel can convert ES6 to ES5                                 |
  | clean-webpack-plugin v. 0.1.18       | Clean your build folder(s) before building                                 |
  | css-loader v. 0.28.10                | Interprets `@import` and `url()` like `import/require()` and resolves them |
  | eslint v. 4.18.2                     | Identifies and reports on patterns found in Javscript code                 |
  | eslint-loader v. 2.0.0               | ESLint loader for webpack                                                  |
  | html-webpack-plugin v. 3.0.6         | Simplifies creation of HTML files to serve webpack bundles                 |
  | jasmine v. 3.1.0                     | Allows Jasmine specs to be run                                             |
  | jasmine-core v. 2.99.1               | JavaScript BDD testing framework                                           |
  | karma v. 2.0.0                       | Allows the execution of JavaScript code in multiple *real* browsers        |
  | karma-chrome-launcher v. 2.2.0       | Launcher for Google Chrome, Google Chrome Canary, and Google Chromium      |
  | karma-cli v. 1.0.1                   | Use Karma from the command line                                            |
  | karma-jasmine v. 1.1.1               | Plugin - adapter for Jasmine testing framework                             |
  | karma-jasmine-html-reporter v. 0.2.2 | Dynamically shows test results at debug.html page                          |
  | karma-jquery v. 0.2.2                | Plugin - adapter for jQuery framework                                      |
  | karma-webpack v. 2.0.13              | Use webpack to preprocess files in Karma                                   |
  | style-loader v. 0.20.2               | adds CSS to the DOM by injecting a `<style>` tag                           |
  | uglifyjs-webpack-plugin v. 1.2.2     | Minifies JavaScript                                                        |
  | webpack v. 4.0.1                     | A module bundler used to bundle JavaScript files and additional resources  |
  | webpack-cli v. 2.0.9                 | Use webpack from command line                                              |
  | webpack-dev-server v. 3.1.0          | Provides live reloading during development                                 |

### *Specs*

  | P/F | Description | Input | Output |
  | --- | ----------- | ----- | ------ |
  | P | Converts a person's age in years to seconds | 5 | 157788000 |
  | P | Determines the difference, in seconds, between two dates | August 02, 2018, August 03, 2018 | 86400 |
  | P | Convert Earth years to Mercury, Venus, Mars, and Jupiter years | 5 | **Mercury:** 20.8 </br> **Venus:** 8.1 </br> **Mars:** 2.7 </br> **Jupiter:** 0.4 |
  | P | Determine life expectancy on Earth, Mercury, Venus, Mars, and Jupiter | 5 & Male, 5 & Female | **Earth:** 76.6, 81.3 </br> **Mercury:** 319.1, 338.8 </br> **Venus:** 123.5, 131.1 </br> **Mars:** 40.7, 43.2 </br> **Jupiter:** 6.5, 6.9 |
  | P | Determine how many years a user has left to live on Earth, Mercury, Venus, Mars, and Jupiter | 5 & Male, 5 & Female | **Earth:** 71.6, 76.3 </br> **Mercury:** 298.3, 317.9 </br> **Venus:** 115.5, 123.1 </br> **Mars:** 38.1, 40.6 </br> **Jupiter:** 6.0, 6.4 |
  | P | Determine (in years) how much a user outlived the avg. life expectancy on Earth, Mercury, Venus, Mars, and Jupiter | 80 M, 85 F | **Earth:** 3.1, 3.4 </br> **Mercury:** 12.9, 14.2 </br> **Venus:** 5.0, 5.5 </br> **Mars:** 1.6, 1.8 </br> **Jupiter:** 0.3, 0.3 |
  | F | Return the date of a user's next birthday on Earth, Mercury, Venus, Mars, and Jupiter |  |  |
  | F | Return the age Keith Richards will be in dog years on the planet Jupiter in 2073 |  |  |
  | F | Determine how many mayfly lifespans (5 min) a human user has lived |  |  |
  | F | Compare user's mayfly lifespans to current age (in Earth years) of our sun |  |  |


 ### *UX/UI*
  * Include and modify bootstrap/css etc.
  * Develop solar theme

### *Polish*
  * Refactor portion of galactic-calculator.js for similar planetary functions
  * Add input and output values to remaining specs
  * Delete unused dependencies
  * Revise README

## Description

### *Setup on OSX*

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

### *Contribution Requirements*

1. Clone the repo
2. Make a new branch
3. Commit and push your changes
4. Create a PR

### *Technologies Used*

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

### *License*

This software is licensed under the MIT license.

Copyright (c) 2018 **Ryan Murry**