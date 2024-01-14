# Project Installations Guide

### Create a new project

1. Create a new project using angular 17

   ```
   ng new project-name
   ```

### Add ESLint and Prettier

1. Install Angular schematics:

   ```js
   ng add @angular-eslint/schematics
   ```

2. Install ESLint and Prettier:

   ```
   npm i prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier -D
   ```

3. Copy the following files:

   - `.eslintrc.json`
   - `.prettierrc`
   - `.prettierignore`

4. Install recommended VS Code extensions:

   - `angular.ng-template`
   - `dbaeumer.vscode-eslint`
   - `esbenp.prettier-vscode`

5. Update settings.json file:

   ```js
   "[html]": {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "editor.formatOnSave": false
   },
   "[typescript]": {
     "editor.defaultFormatter": "dbaeumer.vscode-eslint",
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "editor.formatOnSave": false
   }
   ```

### Install Husky

1. Installation: 
   ```
   npx husky-init && npm install
   ```

2. Update `pre-commit` file:
   ```
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"

   npm run lint
   ```

### Add Tailwind CSS (Optional)

1. Install tailwind CSS: [Tailwind CSS for Angular](https://tailwindcss.com/docs/guides/angular)

2. Install tailwind CSS container to use CSS Container Style Queries

   ```
   npm i @tailwindcss/container-queries
   ```

   then update `tailwind.config.js` file:

   ```js
   plugins: [require("@tailwindcss/container-queries")]
   ```

3. Install recommended extensions:
   - `bradlc.vscode-tailwindcss`

### Add Angular CDK

1. Install angular CDK [Docs](https://material.angular.io/cdk/categories):

   ```
   ng add @angular/cdk
   ```

2. Add the following line inside `styles.css`:

   ```css
   @import "@angular/cdk/overlay-prebuilt.css";
   ```

### Install sweetalert2

1. Install SweetAlert2:
   ```
   npm install sweetalert2
   ```

### Install swiper

1. Install Swiper:

   ```
   npm install swiper
   ```

2. Add the following to `main.ts` file:

   ```js
   import { register } from "swiper/element/bundle";
   register();
   ```

### Other Configurations

1. Angular animations
   ```ts
   import { provideAnimations } from '@angular/platform-browser/animations'

   provideAnimations()
   ```

2. HTTP Client (HttpClientModule) to handle http requests:
   ```ts
   import { HttpClientModule } from '@angular/common/http'

   importProvidersFrom(HttpClientModule),
   ```

3. Router Configuration (withInMemoryScrolling) to configure scroll behavior. Specifically, it enables anchor scrolling and scroll position restoration when navigating between routes:

   ```ts
   import { provideRouter, withInMemoryScrolling } from '@angular/router'

   provideRouter(
      routes,
      withInMemoryScrolling({
         anchorScrolling: 'enabled',
         scrollPositionRestoration: 'enabled'
      })
   )
   ```

   Final `app.config.ts`:
   
   ```ts
   import { ApplicationConfig } from '@angular/core'
   import { provideRouter, withInMemoryScrolling } from '@angular/router'
   import { provideAnimations } from '@angular/platform-browser/animations'

   import { HttpClientModule } from '@angular/common/http'
   import { importProvidersFrom } from '@angular/core'

   import { routes } from './app.routes'

   export const appConfig: ApplicationConfig = {
   providers: [
      provideAnimations(),
      importProvidersFrom(HttpClientModule),
      provideRouter(
         routes,
         withInMemoryScrolling({
         anchorScrolling: 'enabled',
         scrollPositionRestoration: 'enabled'
         })
      )
   ]
   }
   ```