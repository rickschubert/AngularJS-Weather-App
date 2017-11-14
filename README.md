# AngularJS Weather App

Although *React* is my framework of choice, this does not mean that other frameworks are immediately inferiour. *AngularJS* has been around for a very long time already and is still being used in many production environments which is why I decided to create this small weather app.

## Angular Principles shown in this app
- Creating custom components through **directives** and data-binding (`app.directive()`)
- Controlling what each component has access to via **controllers** (`app.controller()`, `$scope`)
- Client-side routing with **angular-route** (`ngRoute`, `app.config()`)
- Providing re-usable functions throughout the app with **services** (`app.factory()`, `$http`)
- Applying custom filters to elements in the `$scope` (`app.filter()`)

## How to run
- `npm install` or `yarn`
- `yarn run live-server` or `npm run live-server` (make sure that you have the *Access-Control-Allow-Origin* header allowed in your browser!)

## Disclaimer
**This app is not meant to reflect a production state!** There are:
- no tests
- no linting
- no bundling
- no minifying
- no ES modules and ES6 syntax usage through babel
- no custom CSS