var test = require('tape');
var duckface = require('../');


var f = function(){};

test('Throws error if function is missing', function (t) {
  t.plan(1);
  t.throws(function(){
    duckface.ensureHasFunctions({get:f},["get","set"]);  
  });
});

test('hasFunctions returns true and false', function (t) {
  t.plan(2);
  t.equal(duckface.hasFunctions({a:f,b:f,c:f},["a","b","c"]),true);
  t.equal(duckface.hasFunctions({a:f,b:f,c:"This is not a function"},["a","b","c"]),false);
});
