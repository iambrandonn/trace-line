module.exports = function(value) {
  var trace = new Error().stack;
  var results = /Error\n.*\n.*at (.*?\()?(.*?):(\d*)/.exec(trace);
  var message = '--- Line #' + results[3] + ' of ' + results[2] + ' executed';
  if (value === undefined) {
    console.log(message);
    return;
  }
  console.log(message + ' with a value of:');
  console.log(value);
}
