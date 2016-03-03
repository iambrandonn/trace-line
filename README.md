# trace-line

A function to aid debugging by logging the line number and filename when executed, optionally passing a value to display

#### Install the plugin
`npm install trace-line --save-dev`

## To use as an import or required
#### Require or import the module
``` javascript
var trace = require('trace-line');
```
or if you are using import
``` javascript
import trace from 'trace-line';
```

####
Call the function in your code
``` javascript
trace();
var x = 33;
trace(x);
```
will produce
```
--- Line #1 of <your filename>.js hit ---
--- Line #3 of <your filename>.js hit with value of:
  33
```

If desired for more compact usage you could name the function something smaller like this:
``` javascript
var d = require('trace-line');
...
d(); 
```

## To use as a global
A global `trace` function is also created when the module is imported/required.  Just make sure that you import
the module somewhere before the first call to trace.  From then on it can be called in anywhere without re-importing.  This is,
of course, not a best practice for Javascript code... but this library is only to be used for debugging.  You could 
potentially leave these statements in your code after deployment, but there *is* a small performance penalty and it
clutters up your logs, so I suggest removing them.
