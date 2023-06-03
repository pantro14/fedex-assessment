# Fedex Assessment

This is just a repo for a single page app built with Angular 16 to show Fedex why I should be hired 😜

## Description

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

## Solution
I have solved all the requirements exposed in the description.
You can see a live solution hosted in a public firebase project:
* https://fedex-assessment-c90ee.web.app/sign-up

I have made this extra [Google Document](https://docs.google.com/document/d/1jf0HqdzuIn1lYAZGUwYJU30kgdvoLf_FCOxf8leR1QU/edit?usp=sharing) containing detailed explanations of the use case scenarios and user requirements


## Run App locally

use `npm run start` and after that open this link: http://localhost:4200/ you'll be redirected to the sign up page form.

## Deploy to Dev

run the `npm run deploy:dev`, which basically is running these 2 processes sequentially:
 * Build the app in development mode: `npm run build:dev`
 * Deploy bundle in firebase project: `firebase deploy`

For more information about how to Host a project in Firebase you can have a look here: https://firebase.google.com/docs/hosting/quickstart

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running e2e tests

Run `ng e2e` to execute e2e test via Protractor.

