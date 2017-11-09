
# Description

Rebuild our current Frontend as a standalone SPA Javascript application with the following specs:

# Features
Deployment
- Webpack for task automation / bundling of files
- NPM Scripts instead of Gulp / Grunt
- Yarn instead of NPM (improved caching of dependencies)
- JS and CSS code is bundled, uglified, minified and comments stripped
- Sourcemaps for JS and CSS

HTML and CSS
- Behaves like a Progressive Web Application (manifest.json)
- Fully HTML5, CSS3 compliant
- Able to work offline (service-worker)
- CSS modules (CSS locally scoped and imported by the JS component)
- support for CSS, SCSS, SASS (import without extension)
- PostCSS with NextCSS and Autoprefixer (and SASS support)
- CSS Grid (replacing Bootstrap and Flexbox)
- Aria support

Javascript
- Preact (with preact-compat) replaces React
- Redux (with thunk?) for state management
- Native Preact Routing (not Symfony)
- support for ES2017 that transpiles to es5 (with polyfill)
- Fully component based (master-slave pattern)

Performance
- Very fast delivery using Gzipped assets and lazy loading
- Much faster building of assets (and no more syncing issues?)

Integration
- Communicates (using Fetch, instead of Ajax) with *Sexy Field* endpoints
- Replaces current frontend (and, if possible, *Styleguide*)
- Has a way to implement access rights (roles) and translations

# Quick start

- run: yarn install
- type: yarn run build --watch
- php -S 127.0.0.1:9000
- go there

to run tests:

- type: yarn run test

to add dependencies:

- type: yarn add <package> --dev

Docker support will follow later.

# Todo
- finish css module set up: find out how to exclude the common.scss definitions from selector name transformation so
  they are applied to each JS component and thus can contain generic css
- how to do linting
- move repository to githost
- add example CSS Grid implementation
- add redux (and thunk, if needed)
- figure out how application can load/show only the components the user has access to
- figure out how not to load everything at once but lazy load the components that werent needed initially
- implement neon frontend (static content)
- refactor bootstrap to CSS Grid and remove the dependency
- replace command flow with API calls using fetch (with proper error handling)
- add aria support for visually impaired
- decide what to do with styleguide (may I recommend merging into frontend?)
- figure out where the translations are loaded from
- add Dockerfile so a docker image can be built and frontend can run as a docker container
