var inquirer = require('inquirer');
var visualPoiStarter = require('./index.js');

visualPoiStarter.findPois(function() {
  askCommand();
});

function askCommand() {
  inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Which command?',
    choices: [
      { name: 'Start Sequence 1', value: 1},
      { name: 'Start Sequence 2', value: 2},
      { name: 'Start Sequence 3', value: 3},
      { name: 'Start Sequence 4', value: 4},
      { name: 'Stop Sequence', value: 0}
    ]
  }).then(function (answers) {
    visualPoiStarter.startSequence(answers.command);
    askCommand();
  });
}