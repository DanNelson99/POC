This package contains a Apollo react client starter kit. This can now be used with services to connect to a backend.

-Download and install node and git
-Clone repo
-cd to client root and run npm install

Commands (client folder)
npm run start - starts dev server and build and opens current web browser.
npm run build - creates files in dist folder for production build.(bundle.js).
npm run test - runs created tests.

Web Pack is the build tool and has all configuriation done for dev. Still needs work for production.
1) React router for navigation also contaiins generic history.
2) Redux is used for central caching store to be able to share data amongst pages and components,
3) Sass is configured to do css globably and locally.
4) Css is configured if necessary.
5) Post css is configured to help fix css issues.
6) Babel is used for newer versions of javasccript in the browsers.
7) Jest emyzne is the unit testing frame work.
8) Bootstrap css has been added
9) Flex-box grid system is configuired.
10) Images are configured in web pack.
11) Apollo client to use with graphql (start backend server)
