# Take Home
A simple web app that displays an infinite scrolling of house data.

**Demo**: [https://take-home-ariel.vercel.app](https://take-home-ariel.vercel.app)

### Project
- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- **Requirements:** [Node.js 12.22.0](https://nodejs.org/) or later

## Getting Started

1. Install project dependencies:
    ```bash
    npm install
    ```

2. Run **development** server:
    ```bash
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

\
**Note**: the `start` script is not used for development, like in *Create React App*, use `dev` instead.

## Test

### Unit Test

For unit tests the project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

- They are in ```src/__tests__``` folder
- Main folder structure is replicated inside tests folder.
- File names should be like ```*.test.ts``` or ```*.test.tsx```
- Non-test files are in ```src/__tests__/__mocks__``` folder

Run **unit tests**:
```bash
npm run test
```

### End-to-end

For e2e tests the project uses [Cypress](https://www.cypress.io/)

- They are in ```cypress/integration``` folder
- File names should be like ```*.spec.ts``` or ```*.spec.tsx```

Run **e2e tests**:
    ```bash
    npm run e2e
    ```

Run **e2e tests** with headless browser:
    ```bash
    npm run e2e:headless
    ```

## Production Server

1. Build the application for production usage:
    ```bash
    npm run build
    ```
2. Start production server:
    ```bash
    npm run start
    ```
