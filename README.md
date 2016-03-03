# trace-line

A function to aid debugging by logging the line number and filename when executed, optionally passing a value to display

#### Install the plugin
`npm install trace-line --save-dev`

## To use as a global
Call the global trace function in your code
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

Although you could potentially leave these statements in your code after deployment, 
there is a small performance penalty and it clutters up your logs, so I would remove them.
