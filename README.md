
# Description

Rebuild our current *Frontend* as a standalone Javascript SPA with the following specs:

# Features

__Deployment__

- Webpack for task automation / bundling of files
- NPM Scripts instead of Gulp / Grunt
- Yarn instead of NPM (faster and improved caching of dependencies)
- JS and CSS code is bundled, uglified, minified and its comments stripped
- Sourcemaps for JS and CSS

__HTML and CSS__

- Behaves like a Progressive Web Application (following manifest)
- Fully HTML5, CSS3 compliant
- Able to work offline (service-worker)
- CSS modules (CSS locally scoped and imported by the JS component)
- support for CSS, SCSS, SASS (import without extension)
- PostCSS with NextCSS, Autoprefixer, CSSNano (and most SASS-like features)
- CSS Grid (replacing Bootstrap and Flexbox)
- Aria support

__Javascript__

- Preact (with preact-compat) replaces React
- Redux (with thunk?) for state management
- Native Preact Routing (not Symfony)
- support for ES2017 that transpiles to es5 (with polyfill)
- Fully component based (master-slave pattern)

__Performance__

- Much faster delivery using Gzipped assets and lazy loading
- Much faster building of assets (and no more syncing issues?)

__Integration__

- Communicates (using Fetch, instead of Ajax) with *Sexy Field* endpoints
- Replaces current *Frontend* (and, if possible, *Styleguide*)
- Has a way to implement access rights (roles) and translations

# Quick start

install dependencies:

`yarn install`

add dependency:

`yarn add <package> --dev`

build:

`yarn run build (--watch)`

run tests:

`yarn run test`

run linters:

`yarn run lint`

deploy: (build, lint, test)

`yarn run deploy`

# Todo

- add example CSS Grid implementation
- add ARIA support for visually impaired
- figure out how not to load everything at once but lazy load the components that werent needed initially (prpl pattern)
- figure out how application can load/show only the components the user has access to
- add Dockerfile so a docker image can be built and frontend can run as a docker container
- move repository to Githost
- figure out where the translations are loaded from
- decide what to do with *Styleguide* (may I recommend merging into frontend?)
- implement neon frontend (static content)
- refactor bootstrap and remove the dependency
- replace command flow with API calls using fetch (with proper error handling)

# Development

__Javascript__

The Javascript code is structured in 3 basic concepts following best practices from React and Redux:

1) Root component: *src/js/App.js*

The root component combines reducers, sets up the Redux store and ties routing components together. There should only be
one root component, unless specific applications need to be set up. For example, one just for filling in a
questionnaire. Also, this is the only place where reducers should be loaded, combined and passed on to the store.

2) Container component: *src/js/pages/Tasks/index.js*

The container component defines actions, initial data, maps the state to props, dispatchers. In our old frontend this was
stored in*containers/App.js* but wasnt really concerned with what it should be concerned with: just the data. What does
the initial data look like, how is new data retrieved, how is data stored. It ensures this data is then passed on to a
presentational component. Container components should be placed underneath 'pages', since each page in the application
usually requires its own container- and child components and logic. Also, it should be called index.js to avoid
confusion with presentational components and ease importing.

3) Presentational component: *src/js/Tasks/js/Tasks.js*

The presentational component is concerned with the actual layout. has its own css, and its own component methods. This
is where you would store child components and methods that deal with presentation (ie tabs, modals, panels, sorting).
Keep in mind that it is allowed to import generic components from the *src/js/components* folder if required. Likewise it
is possible to import generic methods from the *src/js/utils* folder if needed.

__Stylesheets__

The root component imports common .scss declarations like colours and typography. While it is not following the container
pattern as followed in other parts, this allows you to have global CSS together with CSS defined in your components. It
is also much easier to write client-specific CSS code in the future.

The presentational component and (optionally) its children import their own CSS declarations from the
*js/src/pages/Tasks/style* folder. This follows the concept of CSS modules meaning that any CSS code inside will become
available just for that specific component which greatly reduces cascading issues across the application. It is possible
to import without specifying an extension. CSS, SCSS and SASS are all supported, but you can only use the *@import*
directive in .scss files to import further .scss.

# About tests

In the Frontend we should mostly be concerned with Functional Tests (also known as Integration Tests) written from the
end user perspective, covering as much as possible from functionality, interaction and integration. As an example, when
a button is clicked, does the state update? Or does the panel appear? Or, is the navigation bar populated initially?

All Javascript components should contain functional tests that are stored under the *js/src/**/test/* folder.

# Mocking static assets and stylesheets

You can mock the CSS and other file types by using fileMocks and identity-obj-proxy

`"jest": {
    "moduleNameMapper": {
          "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
          "\\.(css|less)$": "identity-obj-proxy"
    }
}`

I have for now removed CSS mocking since we are going to test against it. 

see https://facebook.github.io/jest/docs/en/webpack.html

# Mocking localStorage

You can also mock localStorage, which wont be needed for our *Frontend* any time soon, so I have removed browserMocks.js:

`const localStorageMock = (function() {
let store = {};
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => store[key] = value.toString(),
        clear: () => store = {}
    };
})();
Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
});`

and its configuration option from package.json:

`jest: {
    "setupFiles": [
        "<rootDir>/browserMocks.js"
    ],
}`

# Justification for included dependencies

- "@types/node":                  enable code completion (in your IDE) and make compilation possible
- "autoprefixer":                 automatically inserts CSS vendor prefixes
- "babel-core":                   core files of babel used to transpile es2015 to es5
- "babel-eslint":                 used babel parser for linting
- "babel-jest":                   used by the transformPreprocessor that converts JSX before running tests
- "babel-loader":                 loads js during webpacks process
- "babel-preset-env":             allows transpiling es2015+ code to specified browser version (or default, which is es5)
- "babel-preset-preact":          allows handling of JSX during transpiling
- "classnames":                   used to apply multiple classes to components
- "clean-webpack-plugin":         cleans out folders before copying new files in during deploy
- "compression-webpack-plugin":   used to gzip assets and files
- "copy-webpack-plugin":          used to copy files over during deploy phase
- "css-loader":                   loads css
- "cssnano":                      compresses css and removes comments
- "eslint":                       checks for javascript lint (CLI version)
- "eslint-plugin-jest":           contains linting support for jest
- "eslint-plugin-react":          contains linting support for react
- "extract-text-webpack-plugin":  allows extracting css imports from js components
- "file-loader":                  used to be able to load files in webpack
- "if-env":                       can be used to switch functionality per environment
- "jest":                         used to run test from commandline
- "jest-css-modules":             this solves a lot of issues with css modules not being recognised by jest
- "postcss":                      framework for loading css extensions in webpack
- "postcss-loader":               is able to load css and scss
- "preact":                       the DOM manipulation library
- "preact-cli":                   preact for cli, used by jest
- "preact-compat":                react compatibility library for preact
- "preact-render-spy":            collection of tools to facilitate jest testing
- "preact-router":                routing framework
- "precss":                       this is a module for postcss for mixins and nesting support
- "style-loader":                 loads the styles
- "stylelint":                    checks for css lint (CLI version)
- "uglifyjs-webpack-plugin":      uglifies, minifies javascript
- "webpack":                      webpack is an advanced task runner
