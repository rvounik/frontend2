
# Description

Rebuild our current Frontend as a standalone SPA Javascript application with the following specs:

# Features

Deployment
- Webpack for task automation / bundling of files
- NPM Scripts instead of Gulp / Grunt
- Yarn instead of NPM (faster and improved caching of dependencies)
- JS and CSS code is bundled, uglified, minified and its comments stripped
- Sourcemaps for JS and CSS

HTML and CSS
- Behaves like a Progressive Web Application (manifest.json)
- Fully HTML5, CSS3 compliant
- Able to work offline (service-worker)
- CSS modules (CSS locally scoped and imported by the JS component)
- support for CSS, SCSS, SASS (import without extension)
- PostCSS with NextCSS, Autoprefixer, CSSNano (and most SASS-like features)
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
- Replaces current *Frontend* (and, if possible, *Styleguide*)
- Has a way to implement access rights (roles) and translations

# Quick start

install dependencies:

`yarn install`

build:

`yarn run build (--watch)`

run tests:

`yarn run test`

run linters:

`yarn run lint`

deploy: (build, lint, test)

`yarn run deploy`

add dependencies:

`yarn add <package> --dev`

# Todo

- finish css module set up: find out how to exclude the common.scss definitions from selector name transformation so
  they are applied to each JS component and thus can contain generic css
- implement JS and CSS linting
- move repository to githost
- add example CSS Grid implementation
- add redux (and thunk, if needed)
- figure out how application can load/show only the components the user has access to
- figure out how not to load everything at once but lazy load the components that werent needed initially (prpl pattern)
- implement neon frontend (static content)
- refactor bootstrap to CSS Grid and remove the dependency
- replace command flow with API calls using fetch (with proper error handling)
- add aria support for visually impaired
- decide what to do with styleguide (may I recommend merging into frontend?)
- figure out where the translations are loaded from
- add Dockerfile so a docker image can be built and frontend can run as a docker container

# About tests

In the Frontend we should mostly be concerned with Functional Tests (also known as Integration Tests) written from the
end user perspective, covering as much as possible from functionality, interaction and integration. As an example, when
a button is clicked, does the state update? Or does the panel appear? Or, is the navigation bar populated initially?

# Mocking static assets and stylesheets

You can mock the CSS and other filetypes by using fileMocks and identity-obj-proxy

`"jest": {
    "moduleNameMapper": {
          "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
          "\\.(css|less)$": "identity-obj-proxy"
    }
}`

I have for now removed CSS mocking since we are going to test against it. 

see https://facebook.github.io/jest/docs/en/webpack.html

# Mocking localStorage

you can also mock localStorage, which wont be needed for our *Frontend* any time soon, so have removed browserMocks.js:

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
- "babel-jest":                   used by the transformPreprocessor that converts JSX before running tests
- "babel-loader":                 related to babel
- "babel-preset-es2015":,         presets for supported es version (choose one) <-- deprecated
- "babel-preset-es2017":          presets for supported es version (choose one) <-- deprecated
- "babel-preset-preact":          presets for preact, not sure if this should be used over ..
- "babel-preset-react":           .. this one which is old preset for react
- "classnames":                   used to apply multiple classes to components
- "clean-webpack-plugin":         cleans out folders before copying new files in during deploy
- "compression-webpack-plugin":   used to gzip assets and files
- "copy-webpack-plugin":          used to copy files over during deploy phase
- "css-loader":                   loads css
- "cssnano":                      compresses css and removes comments
- "extract-text-webpack-plugin":  allows extracting css imports from js components
- "file-loader":                  used to be able to load files in webpack
- "if-env":                       used for testing
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
- "uglifyjs-webpack-plugin":      uglifies js
- "webpack":                      webpack is an advanced task runner

# Development

- pages should be defined under src/js/pages, imported by App.js and added to the router component there
- pages can consist of custom, specific components, that live inside the page' components folder
- pages can include generic components from src/js/components
- following the master/slave pattern, redux logic should only be contained in the master component of a page

- components should be defined within the page/ folder unless they are generic enough to be placed under src/js/components
- components can include functionality from src/js/utils (import formatDate from '../../../../utils/formatDate';)
- components import their own css/scss/sass declarations from the style/ folder (you do not need to specify the extension)
- components should contain functional tests that are stored under the test/ folder

- stylesheets are closely tied to the JS component (css modules)
- any custom selector defined in your css will be given a unique name during build and assigned to the JS component
- global css (src/style/common.scss) is not transformed like this and can be used for typography, colours, layout etc
- scss stylesheets may include other stylesheets using @import statements

- note inside src/js/utils there is a global js file that is loaded first and contains startup code (typekit, service-worker etc)
- note yarn should be used in favour of npm
- note in the webpack.config there are extra configuration flags for compressing assets and enabling sourcemaps
