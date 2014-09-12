#duckface
[![NPM version](https://badge.fury.io/js/duckface.svg)](http://badge.fury.io/js/duckface)
[![Code Climate](https://codeclimate.com/github/tillarnold/duckface/badges/gpa.svg)](https://codeclimate.com/github/tillarnold/duckface)
[![Build Status](https://travis-ci.org/tillarnold/duckface.svg?branch=master)](https://travis-ci.org/tillarnold/duckface)
[![devDependency Status](https://david-dm.org/tillarnold/duckface/dev-status.svg)](https://david-dm.org/tillarnold/duckface#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/tillarnold/duckface/badge.png?branch=master)](https://coveralls.io/r/tillarnold/duckface?branch=master)

> Duck typing interfaces

duckface gives you the power of interfaces from languages like java.
But since JavaScript uses duck typing we won't call it an interface
but a duckface.

```js
var duckface = require('duckface');

/**
 * This is a function that requires
 * an Object as a parameter. This object
 * must have a set and a get function.
 */
function myApiFunction(objectWithGetAndSet) {
  duckface.ensureHasFunctions(objectWithGetAndSet, ["get","set"],
    DuckFace.IS_MISSING_THE_FUNCTIONS(
      "The parameter for the function myApiFunction"
    )); //if we don't get all the required functions: throw an error
}
```

## duckface

There are two important functions in duckface:
`hasFunctions` and `ensureHasFunctions`.

### duckface.hasFunctions(object, functions)

`object` is the object to be checked.
`functions` is an array of names of functions that
must be 'implemented' by the object to be valid.

The function returns `true` if `object` contains all
functions defined in the `functions` array.
Otherwise it returns `false`.

### duckface.ensureHasFunctions(object, functions, errorHandler)
 
This function works the same as `hasFunctions`
except that it will throw an `Error` instead of returning
`true` or `false`. `object` and `functions` are the same
as in `hasFunctions`. The additional `errorHandler` 
is a function that gets executed if `object`
does not have all the functions in `functions`.
The return value of `errorHandler` is used for the text 
of the thrown `Error`.

`errorHandler` has one parameter. This parameter is a plain object
that looks like this:

```js
{
  //the functions array passed to ensureHasFunctions
  functions: ["function1","function2","function3"], 
  //All functions missing in the given object
  missingFunctions: ["function2"]
};
```
## Release History
* 2014-09-12   v0.1.0   Remove lodash dependency
* 2014-09-05   v0.0.1   Initial version.
