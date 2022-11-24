# Sygris monorepo

This is a small monorepo prepared for the Sygris technical interview. It is composed of 5 repos:

* `@sygris/backend`: A small backend with NestJS to for server actions.
* `@sygris/mobile`: A native mobile client for both IOS and Android using Capacitor.
* `@sygris/desktop`: A web app served with Next.js. This app is also packaged as a desktop native app using Tauri.
* `@sygris/ui`: An independent repo for shared elements between clients.
* `@sygris/core`: An independent repo for shared domain.

A more detailed description can be found in the README.md file at the root of each project.

## Main technologies used

* [Capacitor](https://capacitorjs.com/): Native runtime for building mobile apps
* [Mantine](https://mantine.dev/): A fantastic library of React components
* [NestJS](https://nestjs.com): Framework for backend server app
* [Next.js](https://nextjs.org/): Development framework for web apps
* [pnpm](https://pnpm.io/): Dependencies package manager
* [Rush](https://rushjs.io/): Scalable monorepo build orchestrator
* [Tauri](https://tauri.app/): Construction toolkit for cross-OS desktop app
* [Vite](https://main.vitejs.dev): Modern frontend tooling with excellent performance

## Scripts

```bash
# Install packages
rush update

# Build projects
rush build

# Do a clean rebuild of everything
rush rebuild

# Do a clean installation of everything
rush update --full -p

# Work on one project
cd ./my-project && rushx $script

# All projects include the following scripts:
rushx dev # Dinamically serves the projects content with hot reloading
rushx serve # Statically serves the build output
rushx build # Build the project
rushx test # Run the tests

# Additionally, some include specific scripts for their cases (see package.json)
```

## Setting Up macOS

### Rush

To install Rush, enter the following terminal:

```bash
npm install -g @microsoft/rush
```

### Pnpm

To install Pnpm, enter the following terminal:

```bash
npm install -g pnpm
```

### CLang and macOS Development Dependencies

You will need to install CLang and macOS development dependencies. To do this, run the following command in your terminal:

```bash
xcode-select --install
```

### Rust

To install Rust on macOS, open a terminal and enter the following command:

```bash
curl --proto '=https' --tlsv1.2 <https://sh.rustup.rs> -sSf | sh
```

### CocoaPods

Cocoapods is an iOS dependency manager that Capacitor uses to install and manage native dependencies for your iOS project.

```bash
brew install cocoapods
```

### Mobile App (native)

The app can be developed without creating a native packaging in the repo.
For inspecting the native bundle the proper platform for each system is required.

#### Xcode

Xcode is required in order to lauch the packaged iOS version of `@sygris/mobile`

#### Android Studio

Android is required in order to lauch the packaged Android version of `@sygris/mobile`

## First-time instructions

1 Install projects dependencies and generate builds:

```bash
rush update && rush build
```

2 Go to `frontend/mobile` and run:

```bash
rushx setup
```
