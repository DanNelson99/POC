const pkg = require('../package.json');

module.exports = {
    plugins: [
      // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
      // https://github.com/postcss/postcss-custom-media
      require('postcss-custom-media')(),
      // Postcss flexbox bug fixer
      // https://github.com/luisrudge/postcss-flexbugs-fixes
      require('postcss-flexbugs-fixes')(),
      // W3C calc() function, e.g. div { height: calc(100px - 2em); }
      // https://github.com/postcss/postcss-calc
      require('postcss-calc')(),
      // Allows you to nest one style rule inside another
      // https://github.com/jonathantneal/postcss-nesting
      require('postcss-nesting')(),
       // Unwraps nested rules like how Sass does it
       // https://github.com/postcss/postcss-nested
      require('postcss-nested')(),
      // W3C color() function, e.g. div { background: color(red alpha(90%)); }
      // https://github.com/postcss/postcss-color-function
      require('postcss-color-function')(),
      // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
      // https://github.com/iamvdo/pleeease-filters
      require('pleeease-filters')(),
      // Generate pixel fallback for "rem" units, e.g. div { margin: 2.5rem 2px 3em 100%; }
      // https://github.com/robwierzbowski/node-pixrem
      require('pixrem')(),
      require('autoprefixer')({
        browsers: pkg.browserslist,
        flexbox: 'no-2009', 
      })
    ]
}