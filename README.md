# Fedex Assessment 📪

This is just a repo for a single page app built with Angular 16 to solve the code challenge provided by Fedex 😎

## Description 🗒️

Build a single page app with a sign-up form.

1. The form should allow users to enter first name, last name, email, and password.
2. All fields are required.
3. Password validation:
   * Should be a minimum of eight characters,
   * Should contain lower and uppercase letters,
   * Should not contain user's first or last name.
4. Email should be validated but there are various ways of accomplishing this. So, show us what you consider as a proper email validation.
5. The form should send a POST request to https://demo-api.now.sh/users. The request body example:
```
{
  firstName: "Thomas",
  lastName: "Shelby",
  email: "thomas@shelby.co.uk"
}
```

## Solution 🤖
I have created an Angular 16 web app, including standalone components and enhancing the UI and styling with the popular and powerful [tailwindcss](https://tailwindcss.com/) framework. 

I have solved all the requirements exposed in the description. 
You can see a live solution hosted in a public firebase project:
* https://fedex-assessment-c90ee.web.app/sign-up

I have made this extra [Google Document](https://docs.google.com/document/d/1jf0HqdzuIn1lYAZGUwYJU30kgdvoLf_FCOxf8leR1QU/edit?usp=sharing) containing detailed explanations of the use case scenarios and user requirements


## Run App locally 💻

use `npm run start` and after that open this link: http://localhost:4200/ you'll be redirected to the sign up page form.

## Deploy to Dev 🦾

run the `npm run deploy:dev`, which basically is running these 2 processes sequentially:
 * Build the app in development mode: `npm run build:dev`
 * Deploy bundle in firebase project: `firebase deploy`

For more information about how to Host a project in Firebase you can have a look here: https://firebase.google.com/docs/hosting/quickstart

** Disclaimer ** : `firebase deploy` won't work unless you first do `firebase login` and authenticate with my personal credentials.

## Run Prettier 💅

Run `npm run pretty-code` this will run [Prettier](https://prettier.io/) which makes the code more readable for human beings.

## Run Lint 🧹

Run `npm run lint` this will make sure the code is consistent with eslint standards

## Running unit tests 🚦

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
For maximum QA the coverage is setup to 100%.

### Code Coverage Report: 
Jest is configured to generate reports using [istanbul](https://istanbul.js.org/), you can find the report opening the following file `coverage/lcov-report/index.html`


## Running e2e tests 🚦
E2e test have been configured with WebdriverIO + Jasmine + Typescript compiler.

To run the integration test you will require to use 2 different terminals:
 * In terminal 1: `npm run start` to start the app.
 * In terminal 2: `npm run e2e` to execute e2e test via WebdriverIO conf file.




