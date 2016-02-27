module.exports = function(value) {
  var trace = new Error().stack;
  var results = /.*\n.*\n.*at (.*?):(\d*)/.exec(trace);
  var message = '--- Line #' + results[2] + ' of ' + results[1] + ' hit';
  if (value === undefined) {
    console.log(message);
    return;
  }
  console.log(message + ' with value of:');
  console.log('\t' + value + '\n');
}
