# E-commerce Automation Tests

## Introduction

This repository contains automated tests for an e-commerce website using WebDriverIO and Allure for reporting.

## Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js
- npm 

## Setup

1. Clone this repository.
2. Open the project in code editor.
3. Open the terminal.
4. Execute ***`npm install`*** to install the node modules.
5. Create .env file with proper credentials

## Running tests
#### Run all tests in Chrome browser
`npm run test:chrome:all`
#### Run positive tests in Chrome browser
`npm run test:chrome:positive`
#### Run negative tests in Chrome browser
`npm run test:chrome:negative`
#### Run all tests in Firefox browser
`npm run test:firefox:all`
#### Run positive tests in Firefox browser
`npm run test:firefox:positive`
#### Run negative tests in Firefox browser
`npm run test:firefox:negative`

## Generating and Viewing Allure Reports
#### Generate Allure report
`npm run allure:report`

#### Clean previous reports (optional):
`npm run clean:reports`
