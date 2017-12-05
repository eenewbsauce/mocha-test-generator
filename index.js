const argv = require('minimist')(process.argv.slice(2));
const { helpers, Mocha } = require('./lib');

let sourceClass = require(argv.source);
let output = '';
let specs = [];
let mochaHelper = new Mocha(sourceClass)

Reflect.ownKeys(sourceClass.prototype).forEach((key) => {
    specs.push(mochaHelper.it(key));

});

output = mochaHelper.describe(specs, false);

console.log(output);
