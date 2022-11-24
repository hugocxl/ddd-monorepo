# ddd-monorepo

## Install required

* [Rush](https://rushjs.io/): Scalable monorepo build orchestrator
* [pnPm](https://pnpm.io/): Dependencies package manager
* [Vite](https://main.vitejs.dev): Modern frontend tooling with excellent performance
* [NestJS](https://nestjs.com): Framework for backend app
* [Tauri](https://tauri.app/): Construction toolkit for cross-OS desktop app
* [Next.js](https://nextjs.org/): Development framework for web app
* [Capacitor](https://capacitorjs.com/): Native runtime for building mobile apps

## CocoaPods

Cocoapods is an iOS dependency manager that Capacitor uses to install and manage native dependencies for your iOS project.
brew install cocoapods

```bash
# Pull the latest changes from Git
git pull

# Install NPM packages as needed
rush update

# Do a clean rebuild of everything
rush rebuild

# Work on one project
cd ./my-project

# Let's assume there is a "start" script in the package.json.
# (To see the available commands, type "rushx" by itself.)
rushx start
```
