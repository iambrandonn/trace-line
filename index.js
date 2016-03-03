function trace(value) {
  var trace = new Error().stack;
  var results = /Error\n.*\n.*at (.*?\()?(.*?):(\d*)/.exec(trace);
  var message = '--- Line #' + results[3] + ' of ' + results[2] + ' executed';
  if (arguments.length === 0) {
    console.log(message);
    return;
  }
  console.log(message + ' with a value of:');
  console.log(value);
}

module.exports = trace;
if (global !== undefined) {
  global.trace = trace
}
