
# Description

Rebuild our current Frontend as a standalone SPA Javascript application with the following specs:

# Features

- React 16 or, even better, Preact (and preact-compat)
- Redux
- Routing (native, not symfony)
- Webpack
- NPM Scripts instead of Gulp / Grunt
- (very) fast building of assets
- Yarn instead of NPM
- PostCSS with NextCSS and Autoprefixer (and SASS support)
- Code splitting for Javascript and CSS
- es2017
- transpiles to es5 + polyfill (uglified / minified)
- CSS Grid (replacing Bootstrap and Flexbox)
- Sourcemaps for JS and CSS
- Aria support
- Very fast delivery using Gzipped assets and lazy loading
- Communicates (with Fetch, instead of Ajax) with Sexy Field endpoints
- Replaces current frontend (and, if possible, styleguide)
- Has a way to implement access rights (using roles) and translations

# Quick start

- run: yarn install
- type: yarn run build --watch
- php -S 127.0.0.1:9000
- go there

to add dependencies:

- type: yarn add <package> --dev

# Todo

- move to githost
- view some webpack config examples to see if the current config is really how it should be (seems messy)
- check the article about project set up and see if this one matches
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
