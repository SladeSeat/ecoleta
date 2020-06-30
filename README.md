<p align="center">
  <img src="./.github/logo.png" />
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/fariasmateuss/ecoleta?color=%234cb79&style=flat-square">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/fariasmateuss/ecoleta?color=%234cb79&style=flat-square">

  <a href="https://github.com/fariasmateuss/ecoleta/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/fariasmateuss/ecoleta?color=%234cb79&style=flat-square">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=%234cb79&style=flat-square">
</p>
 
<img src=".github/web.png" align="center" />

## About this Project

App waste collection marketplace built with Restful API in NodeJs, TypeScript, ReactJS, React Native and more.

## Why?

Ecoleta is an application that aims to help people find places that collect specific types of waste, encouraging people to recycle more.

<img src=".github/mobile.png" align="center" />

## Built With

- [TypeScript](https://www.typescriptlang.org) - TypeScript is a superset of JavaScript that adds typing and some other features to the language.
- [NodeJs](https://nodejs.org/en/) - Build the server
- [ReactJs](https://reactjs.org) - A JavaScript library for building user interfaces
  - [React Icons](https://react-icons.github.io/react-icons/) - Utilizes ES6 imports that allows you to include only the icons that your project is using.
  - [React Leaflet Maps](https://react-leaflet.js.org) - React components Leaflet Maps
- [React Native](https://reactnative.dev) - Native Development
  - [React Native Maps](https://github.com/react-native-community/react-native-maps) - React Native Mapview component for iOS + Android
  - [React Navigation](https://reactnavigation.org) - Routing and navigation
  - [React Native Svg](https://github.com/react-native-community/react-native-svg) - SVG library for React Native, React Native Web, and plain React web projects.
- [Expo](https://expo.io) - Deploy and quickly iterate on native Android, iOS, and web apps
  - [Expo Font](https://docs.expo.io/versions/latest/sdk/font/) - Expo fonts
  - [Expo Location](https://docs.expo.io/versions/latest/sdk/location/) - Geolocation information from the device.
  - [Expo Vector Icons](https://github.com/expo/vector-icons) - Expo Vector Icons
  - [Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/) - Compose and send mail
- [SQLite3](https://www.sqlite.org) - DB Connector
- [Express](https://expressjs.com/) - Router of the Application
- [KnexJs](http://knexjs.org) - SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift
- [Celebrate](https://github.com/arb/celebrate) - A joi validation middleware for Express.
- [CORS](https://www.npmjs.com/package/cors) - Cross-origin Resource Sharing
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and NodeJs
- [Multer](https://www.npmjs.com/package/multer) - Multer is a NodeJs middleware for file upload
- [ESlint](https://eslint.org) - ESLint statically analyzes your code to quickly find problems.
- [Nodemon](https://nodemon.io/) - Process Manager used in the development
- [Prettier](https://prettier.io/docs/en/cli.html) - An opinionated code formatter

## Development setup

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment with NodeJs installed.

**Cloning the Repository**

```
$ git clone https://github.com/fariasmateuss/ecoleta.git
```

### Getting Started

**Back-End**

- Run `npm install` in the `server` folder;
- Run `npm run server` to up the server;
- Open Insomnia or Postman and import the Insomnia.json workspace file at backend folder.

**Front-End**

- Run `npm install` in the `web` folder;
- Run `npm start` to up the project;

**Mobile**

- Run `npm install` in the `mobile` folder
- Update the baseURL at src/services/api.js.
- Run `expo start` to up the project.

## Contribution

See the [contribution guide](/.github/CONTRIBUTING.md) for more details on how to contribute to this project.

# License

[MIT License](/LICENSE)
