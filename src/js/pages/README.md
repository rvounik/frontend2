
contains folders relating to pages (routes)
each page folder itself contains :

Inbox

contains:
- inbox.js --> defines page structure, can include any of the following:

optional:
- generic components from /src/js/components
- its own components specifically related to the Inbox page (not meant for reuse) --> in 'components' folder
- a css/scss/sass stylesheet --> in 'style' folder
- static assets (images, video, sound, downloads) --> in 'assets' folder
- redux logic --> contained in 'actions', 'reducers' etc. folders (only for master component!)

each of these folders may include a test folder containing tests
