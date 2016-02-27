# trace-line

A function to aid debugging by logging the line number and filename when executed, optionally passing a value to display

## To use:

#### Install the plugin
`npm install trace-line --save-dev`

#### Require or import the module
``` javascript
var traceLine = require('trace-line');
```
or if you are using import
``` javascript
import traceLine from 'trace-line';
```

####
Call the function in your code
``` javascript
traceLine();
var x = 33;
traceLine(x);
```
will produce
```
--- Line #1 of <your filename>.js hit ---
--- Line #3 of <your filename>.js hit with value of:
  33
```

For more compact usage you could name the function something smaller like this:
``` javascript
var d = require('trace-line');
...
d(); 
```

Although you could potentially leave these statements in your code after deployment, 
there is a small performance penalty and it clutters up your logs, so I would remove them.