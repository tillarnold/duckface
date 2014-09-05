var duckface = {};
var isFunction = require('lodash.isfunction');


var getErrorObject = function(object, functions) {
  var missing = []; 

  functions.forEach(function(elem){
    if(!isFunction(object[elem])) {
      missing.push(elem);
    }   
  });

  return {
    functions: functions,
    missingFunctions: missing 
  }; 
};

duckface.hasFunctions = function hasFunctions(object,functions) {
  return getErrorObject(object, functions).missingFunctions.length <= 0;
};

duckface.ensureHasFunctions = function ensureHasFunctions(object, functions, errorHandler) {
  var errors = getErrorObject(object, functions);
  errorHandler = errorHandler || duckface.IS_MISSING_THE_FUNCTIONS("");
  if(errors.missingFunctions.length > 0) {
    throw new Error(errorHandler(errors));
  }
};


//errorHandler

duckface.LIST_MISSING_FUNCTIONS = function(errors){
  return '"'+ errors.missingFunctions.filter(
    function (value, index, self) {
      return self.indexOf(value) === index;
    }
  ).join('", "') + '"';
};


duckface.IS_MISSING_THE_FUNCTIONS = function(who){
  return function(errors) {
    return who + ' is missing the following functions: ' + duckface.LIST_MISSING_FUNCTIONS(errors);
  };
};

module.exports = duckface;
