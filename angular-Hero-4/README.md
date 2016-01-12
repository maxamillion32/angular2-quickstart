## New Features

In this section of the angular hero project, we refactored some of the code into a seperate libraries and components. In order to deal with the neccessary es6 import statements, and to have debugging enabled we introduced new stacks to our library. From our gulp file we can see we introduced a few new things.

Babel - ES6 to ES5 transpilier. This does a good job of converting everything into es5 readable code except for modules. For modules, it converts ES6 into commonjs format because that format of var x = require('x') matches syntax with the import es6 syntax. Since commonjs is not accepted by the browser, we implement browserify

Browserify - Browserify introduces a step that aggregates all the neccesary code into one file (in this case build.js). This helps us handle commonjs format modules, and builds our application into a single readable js file. Although this makes it difficult to debug, so we introduce a new concept called sourcemaps

Sourcemaps - Source maps let the browser also load the original source js so that if there is logging statements or javascript errors, they point back to the appropriate source file instead of the transpilied and compiled build.js. This is extremly helpful when building applications. Be wary, sourcemaps are finicky and will not load if the sourcemap comment is not on the very last line of the compiled js file.

The other piecies are just to make development quicker and more efficient.