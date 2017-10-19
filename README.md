
Rebuild our current Frontend as a standalone SPA Javascript application with the following specs:

- React 16
- Redux
- Webpack
- NPM Scripts instead of Gulp / Grunt
- Yarn instead of NPM
- PostCSS with NextCSS and autoprefixer
- Code splitting for Javascript and CSS
- es2017
- transpiles to es5
- CSS Grid
- Fetch instead of Ajax
- Sourcemaps for JS and CSS
- Aria support

Quick start:

- run: yarn install
- type: yarn run build
- php -S 127.0.0.1:9000
- go there

Todo:

- move to githost
- view some webpack config examples to see if the current config is really how it should be (seems messy)
- check the article about project set up and see if this one matches
- get JS sourcemaps working
- upgrade es2015 to es2017
- add example CSS Grid implementation
- add redux (and thunk, if needed)
- figure out how to do the modular loading of css instead of everything in one big file again
- figure out how application can load/show only the components the user has access to
- figure out how not to load everything at once but lazy load the components that werent needed for first paint
- implement neon frontend (static content)
- refactor bootstrap to CSS Grid and remove the dependency
- replace command flow with API calls using fetch (with proper error handling)
- add aria support for visually impaired
- decide what to do with styleguide (may I recommend merging into frontend?)
- when implementing our own questionnaires, add new entry point that uses preact instead of react
- figure out where the translations are loaded from
