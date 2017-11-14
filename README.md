
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
- implement JS and CSS linting
- set up testing
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







# about testing

In the Frontend we should mostly be concerned with Functional Tests (also called Integration Tests). This is because
the Frontend is aimed at the end user and as such it should be tested from the end user perspective. For the end user
it does not matter much how something works, it is more important to know that it works. This is different from Unit
Testing in other parts of the application that do not face the end user. You want to know that, when a certain button
is clicked, a certain value in some other part of the application is changed. So this covers integration, interaction
and functionality. It should also be possible to test state mutations, since we use (p)react a lot.

# For all this we need:

1. a test runner (like karma)
2. a testing framework (like mocha, jasmine, enzyme, jest)
3. a (virtual) DOM (like phantomjs, chrome headless, selenium, jsdom)

often you'll find suites that combine these requirements into one package. one of those is preact-render-spy.

# some learnings

- Noticed PhantomJS is no longer developed
- Hearing good things about Enzyme (which uses jsdom instead of phantomjs)
- also Jest is using JSDom (and Jest is recommended by preact-boilerplate and facebook)
- Read into shallow rendering and decided we need this to do isolated tests
- Found preact-render-spy package, which does shallow rendering and uses jsdom / jest (and supports preact)

# important features of  preact-render-spy

- shallow rendering: only renders parent node and stubs all child nodes (depth: 1)
- deep rendering: renders children up to n levels deep (depth: n)

# to test function:

it('lets you do cool things with preact components', () => {
  const context = shallow(<Testable />);
  expect(context.find('div').contains(<a>link</a>)).toBeTruthy();
  context.find('[onClick]').simulate('click');
  expect(context.find('a').text()).toBe('clicked');
});

# to test state:

- const context = shallow(<ClickCounter />);
- expect(context.state()).toEqual({ count: 0 });
- context.find('[onClick]').simulate('click');
- expect(context.state('count')).toEqual(1);

# this seems good I will now integrate and test it

wont work...

and sghould preset be react or preact?
