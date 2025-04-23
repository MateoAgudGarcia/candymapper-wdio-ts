# CandyMapper WDIO TypeScript[![Deployment - Main Branch (WDIO)](https://github.com/MateoAgudGarcia/candymapper-wdio-ts/actions/workflows/wdio-deployment.yml/badge.svg)](https://github.com/MateoAgudGarcia/candymapper-wdio-ts/actions/workflows/wdio-deployment.yml)

## Description

This project is a boilerplate for end-to-end (E2E) testing of the CandyMapper app using WebdriverIO (WDIO) with TypeScript. It demonstrates how to set up, organize, and run automated browser tests with modern tools and best practices, including Allure reporting and GitHub Actions CI/CD integration.

The main goals of this project are to provide a clear example of how to:

- Use WebdriverIO with TypeScript for browser automation.
- Organize page objects and test specs for scalable test suites.
- Generate and visualize test reports with Allure.
- Run tests in CI/CD pipelines using GitHub Actions.
- Enforce code quality with ESLint and Prettier.

## Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:MateoAgudGarcia/candymapper-wdio-ts.git
   cd candymapper-wdio-ts
   ```

2. Install dependencies:

   ```sh
   npm i
   ```

## Running Tests

To run the tests locally (using the default configuration):

```sh
npm run wdio
```

To run tests in a specific environment (e.g., Chrome) with Xvfb (for CI or headless environments):

```sh
xvfb-run --auto-servernum npm run wdio -- --env chrome
```

## Test Reports - Locally

Generate and open the Allure report by running the provided script:

```sh
./create_reports.sh
```

## Project Structure

```sh
candymapper-wdio-ts/
├── test/
│   ├── pageobjects/
│   │   ├── modal/
│   │   │   ├── base.modal.ts
│   │   │   ├── find-candy.modal.ts
│   │   │   └── index.ts
│   │   └── pages/
│   │       ├── attend-party.page.ts
│   │       ├── halloween-party.page.ts
│   │       ├── home.page.ts
│   │       ├── host-party.page.ts
│   │       ├── index.ts
│   │       └── party-location.page.ts
│   └── specs/
│       ├── contact-us.e2e.ts
│       └── halloween-party.e2e.ts
├── allure-report/
├── allure-results/
├── .github/
│   └── workflows/
│       └── main-branch-deployment-wdio.yml
├── .prettierrc
├── eslint.config.js
├── package.json
├── tsconfig.json
├── wdio.conf.ts
├── create_reports.sh
├── delete_reports.sh
└── README.md
```

## Linting & Formatting

Run linting and formatting checks:

```sh
eslint .
prettier --check .
```

## Continuous Integration

This project uses GitHub Actions to run tests and deploy Allure reports automatically on pushes to the `master` branch. See `.github/workflows/wdio-deployment.yml` for details.

## License

MIT
