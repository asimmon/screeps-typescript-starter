# screeps-typescript-starter

Screeps TypeScript Starter with code deployment capabilities on official and private servers.

### Features

- Write your Screeps AI using TypeScript and transpile it to a single module.
- Deploy your code on official server and / or private servers.
- Includes code completion and syntax highlighting with Screeps type definitions.

### Usage

1. Restore npm packages.
2. Follow the instructions in `credentials.json` in order to setup code deployment.
3. Run `npm run push-official` to deploy your code to the official server or `npm run push-pserver` to deploy your code to a private server.
4. Run `npm run build` to transpile your code to `dist/main.js` without deployment.
