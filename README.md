# Super Galactic Age Calculator

#### Epicodus Javascript Week 1 Code Review, 08.03.2018

#### Ryan Murry


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
  | Description                                                                         | Input | Output | Pass/Fail |
  | ----------------------------------------------------------------------------------- | ----- | ------ | --------- |
  | Converts a person's age in years to seconds                                         |       |        |           |
  | Determines the difference, in seconds, between two dates                            |       |        |           |
  | Convert Earth years to Mercury years                                                |       |        |           |
  | Convert Earth years to Venus years                                                  |       |        |           |
  | Convert Earth years to Mars years                                                   |       |        |           |
  | Convert Earth years to Jupiter years                                                |       |        |           |
  | Determine life expectancy on Mercury                                                |       |        |           |
  | Determine life expectancy on Venus                                                  |       |        |           |
  | Determine life expectancy on Mars                                                   |       |        |           |
  | Determine life expectancy on Jupiter                                                |       |        |           |
  | Determine how many years a user has left to live on each Mercury                    |       |        |           |
  | Determine how many years a user has left to live on each Venus                      |       |        |           |
  | Determine how many years a user has left to live on each Mars                       |       |        |           |
  | Determine how many years a user has left to live on each Jupiter                    |       |        |           |
  | Determine the number of years a user has lived past the life expectancy on Mercury. |       |        |           |
  | Determine the number of years a user has lived past the life expectancy on Venus.   |       |        |           |
  | Determine the number of years a user has lived past the life expectancy on Mars.    |       |        |           |
  | Determine the number of years a user has lived past the life expectancy on Jupiter. |       |        |           |
  | Return the date of a user’s next birthday on each Mercury                           |       |        |           |
  | Return the date of a user’s next birthday on each Venus                             |       |        |           |
  | Return the date of a user’s next birthday on each Mars                              |       |        |           |
  | Return the date of a user’s next birthday on each Jupiter                           |       |        |           |
  | Return the age Keith Richards will be in dog years on the planet Jupiter in 2073    |       |        |           |
  | Determine how many mayfly lifespans (5 min) a human user has lived                  |       |        |           |
  | Compare user's mayfly lifespans to current age (in Earth years) of our sun          |       |        |           |

1. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that... 

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome

## Description

## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Ryan Murry**